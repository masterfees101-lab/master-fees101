import { supabase } from "./client";

/**
 * Seed all sample data to the database
 * Order matters due to foreign key constraints
 */
export async function seedAllData(userId) {
  try {
    console.log("🌱 Starting database seeding...");

    // 1. Seed service types first (no dependencies)
    const serviceTypes = await seedServiceTypes();
    console.log("✅ Service types seeded");

    // 2. Seed addresses (no dependencies)
    const address = await seedAddress();
    console.log("✅ Address seeded");

    // 3. Seed school (depends on address)
    const school = await seedSchool(address);
    console.log("✅ School seeded");

    // 4. Seed school service pricings (depends on school and service types)
    await seedSchoolServicePricings(school, serviceTypes);
    console.log("✅ School service pricings seeded");

    // 5. Seed parents (no dependencies)
    const parents = await seedParents();
    console.log("✅ Parents seeded");

    // 6. Seed students (depends on parents and school)
    const students = await seedStudents(parents, school);
    console.log("✅ Students seeded");

    // 7. Seed payments (depends on students) - includes advance payments
    const payments = await seedPayments(students);
    console.log("✅ Payments seeded");

    // 8. Seed payment lines (depends on payments and service types)
    await seedPaymentLines(payments, serviceTypes);
    console.log("✅ Payment lines seeded");

    // If we have a logged-in user, seed user-specific data
    if (userId) {
      // 9. Seed profile for the current user
      await seedUserProfile(userId);
      console.log("✅ User profile seeded");

      // 10. Seed user preferences
      await seedUserPreferences(userId);
      console.log("✅ User preferences seeded");

      // 11. Seed invoices (depends on profile and students)
      const invoices = await seedInvoices(userId, students);
      console.log("✅ Invoices seeded");

      // 12. Seed invoice info lines (depends on invoices and service types)
      await seedInvoiceInfoLines(invoices, serviceTypes);
      console.log("✅ Invoice info lines seeded");

      // 13. Seed notifications
      await seedNotifications(userId, students);
      console.log("✅ Notifications seeded");
    }

    console.log("🎉 Database seeding completed successfully!");
    return { success: true, message: "Database seeded successfully!" };
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    return { success: false, message: error.message };
  }
}

// ==================== SERVICE TYPES (only 4) ====================
async function seedServiceTypes() {
  const serviceTypes = [
    { name: "Tuition" },
    { name: "Boarding" },
    { name: "Lunch" },
    { name: "Transport" },
  ];

  const { data, error } = await supabase
    .from("service_types")
    .upsert(serviceTypes, { onConflict: "name" })
    .select();

  if (error) throw error;
  return data;
}

// ==================== ADDRESS (single) ====================
async function seedAddress() {
  const address = {
    city: "Chongwe",
    province: "Lusaka",
    postal_code: "10102",
    street_address: "Plot No. 809 Ibex Dam Area",
  };

  const { data, error } = await supabase
    .from("addresses")
    .insert(address)
    .select()
    .single();

  if (error) throw error;
  return data;
}

// ==================== SCHOOL (Twalumbu only) ====================
async function seedSchool(address) {
  const school = {
    address_id: address.address_id,
    school_name: "Twalumbu Education Centre",
    email: "info@twalumbu.edu.zm",
    phone: "+260867485884",
    organisation_category: "Primary School",
    offers_boarding: true,
    offers_lunch: true,
    offers_transport: true,
    is_active: true,
  };

  const { data, error } = await supabase
    .from("schools")
    .insert(school)
    .select()
    .single();

  if (error) throw error;
  return data;
}

// ==================== SCHOOL SERVICE PRICINGS ====================
async function seedSchoolServicePricings(school, serviceTypes) {
  const grades = [
    "Grade 1",
    "Grade 2",
    "Grade 3",
    "Grade 4",
    "Grade 5",
    "Grade 6",
    "Grade 7",
  ];
  const pricings = [];

  const tuition = serviceTypes.find((s) => s.name === "Tuition");
  const boarding = serviceTypes.find((s) => s.name === "Boarding");
  const lunch = serviceTypes.find((s) => s.name === "Lunch");
  const transport = serviceTypes.find((s) => s.name === "Transport");

  for (const grade of grades) {
    for (const term of [1, 2, 3]) {
      // Tuition - varies by grade (higher grades cost more)
      const gradeNum = parseInt(grade.split(" ")[1]);
      pricings.push({
        school_id: school.school_id,
        service_id: tuition.service_type_id,
        grade,
        price: 2500 + gradeNum * 100,
        term,
        year: 2025,
      });

      // Boarding
      pricings.push({
        school_id: school.school_id,
        service_id: boarding.service_type_id,
        grade,
        price: 3500,
        term,
        year: 2025,
      });

      // Lunch
      pricings.push({
        school_id: school.school_id,
        service_id: lunch.service_type_id,
        grade,
        price: 850,
        term,
        year: 2025,
      });

      // Transport
      pricings.push({
        school_id: school.school_id,
        service_id: transport.service_type_id,
        grade,
        price: 1200,
        term,
        year: 2025,
      });
    }
  }

  const { error } = await supabase
    .from("school_service_pricings")
    .insert(pricings);

  if (error) throw error;
}

// ==================== PARENTS (12 parents) ====================
async function seedParents() {
  const parents = [
    {
      first_name: "John",
      last_name: "Mwale",
      phone_number: "+260977111111",
      email: "john.mwale@gmail.com",
    },
    {
      first_name: "Mary",
      last_name: "Banda",
      phone_number: "+260966222222",
      email: "mary.banda@gmail.com",
    },
    {
      first_name: "Peter",
      last_name: "Phiri",
      phone_number: "+260955333333",
      email: "peter.phiri@gmail.com",
    },
    {
      first_name: "Grace",
      last_name: "Tembo",
      phone_number: "+260977444444",
      email: "grace.tembo@gmail.com",
    },
    {
      first_name: "David",
      last_name: "Zimba",
      phone_number: "+260966555555",
      email: "david.zimba@gmail.com",
    },
    {
      first_name: "Sarah",
      last_name: "Mulenga",
      phone_number: "+260955666666",
      email: "sarah.mulenga@gmail.com",
    },
    {
      first_name: "James",
      last_name: "Chisanga",
      phone_number: "+260977777777",
      email: "james.chisanga@gmail.com",
    },
    {
      first_name: "Ruth",
      last_name: "Mumba",
      phone_number: "+260966888888",
      email: "ruth.mumba@gmail.com",
    },
    {
      first_name: "Michael",
      last_name: "Lungu",
      phone_number: "+260955999999",
      email: "michael.lungu@gmail.com",
    },
    {
      first_name: "Elizabeth",
      last_name: "Kabwe",
      phone_number: "+260977000001",
      email: "elizabeth.kabwe@gmail.com",
    },
    {
      first_name: "Joseph",
      last_name: "Zulu",
      phone_number: "+260966000002",
      email: "joseph.zulu@gmail.com",
    },
    {
      first_name: "Agnes",
      last_name: "Sakala",
      phone_number: "+260955000003",
      email: "agnes.sakala@gmail.com",
    },
  ];

  const { data, error } = await supabase
    .from("parents")
    .insert(parents)
    .select();

  if (error) throw error;
  return data;
}

// ==================== STUDENTS (15 students) ====================
async function seedStudents(parents, school) {
  const students = [
    // John Mwale's children
    {
      parent_id: parents[0].parent_id,
      school_id: school.school_id,
      first_name: "Chanda",
      last_name: "Mwale",
      grade: "Grade 3",
      class: "3A",
      date_of_enrollment: "2023-01-10",
    },
    {
      parent_id: parents[0].parent_id,
      school_id: school.school_id,
      first_name: "Mutale",
      last_name: "Mwale",
      grade: "Grade 5",
      class: "5B",
      date_of_enrollment: "2021-01-15",
    },
    // Mary Banda's child
    {
      parent_id: parents[1].parent_id,
      school_id: school.school_id,
      first_name: "Natasha",
      last_name: "Banda",
      grade: "Grade 2",
      class: "2A",
      date_of_enrollment: "2024-01-08",
    },
    // Peter Phiri's children
    {
      parent_id: parents[2].parent_id,
      school_id: school.school_id,
      first_name: "Kelvin",
      last_name: "Phiri",
      grade: "Grade 7",
      class: "7A",
      date_of_enrollment: "2019-01-12",
    },
    {
      parent_id: parents[2].parent_id,
      school_id: school.school_id,
      first_name: "Linda",
      last_name: "Phiri",
      grade: "Grade 4",
      class: "4A",
      date_of_enrollment: "2022-01-10",
    },
    // Grace Tembo's children
    {
      parent_id: parents[3].parent_id,
      school_id: school.school_id,
      first_name: "Mwansa",
      last_name: "Tembo",
      grade: "Grade 4",
      class: "4B",
      date_of_enrollment: "2022-01-11",
    },
    {
      parent_id: parents[3].parent_id,
      school_id: school.school_id,
      first_name: "Bwalya",
      last_name: "Tembo",
      grade: "Grade 1",
      class: "1A",
      date_of_enrollment: "2025-01-06",
    },
    // David Zimba's child
    {
      parent_id: parents[4].parent_id,
      school_id: school.school_id,
      first_name: "Timothy",
      last_name: "Zimba",
      grade: "Grade 6",
      class: "6A",
      date_of_enrollment: "2020-01-14",
    },
    // Sarah Mulenga's child
    {
      parent_id: parents[5].parent_id,
      school_id: school.school_id,
      first_name: "Precious",
      last_name: "Mulenga",
      grade: "Grade 3",
      class: "3B",
      date_of_enrollment: "2023-01-09",
    },
    // James Chisanga's children
    {
      parent_id: parents[6].parent_id,
      school_id: school.school_id,
      first_name: "Emmanuel",
      last_name: "Chisanga",
      grade: "Grade 5",
      class: "5A",
      date_of_enrollment: "2021-01-18",
    },
    {
      parent_id: parents[6].parent_id,
      school_id: school.school_id,
      first_name: "Faith",
      last_name: "Chisanga",
      grade: "Grade 2",
      class: "2B",
      date_of_enrollment: "2024-01-07",
    },
    // Ruth Mumba's child
    {
      parent_id: parents[7].parent_id,
      school_id: school.school_id,
      first_name: "Daniel",
      last_name: "Mumba",
      grade: "Grade 6",
      class: "6B",
      date_of_enrollment: "2020-01-13",
    },
    // Michael Lungu's child
    {
      parent_id: parents[8].parent_id,
      school_id: school.school_id,
      first_name: "Hope",
      last_name: "Lungu",
      grade: "Grade 1",
      class: "1B",
      date_of_enrollment: "2025-01-08",
    },
    // Elizabeth Kabwe's child
    {
      parent_id: parents[9].parent_id,
      school_id: school.school_id,
      first_name: "Blessing",
      last_name: "Kabwe",
      grade: "Grade 7",
      class: "7B",
      date_of_enrollment: "2019-01-15",
    },
    // Joseph Zulu's child
    {
      parent_id: parents[10].parent_id,
      school_id: school.school_id,
      first_name: "Charity",
      last_name: "Zulu",
      grade: "Grade 4",
      class: "4A",
      date_of_enrollment: "2022-01-12",
    },
  ];

  const { data, error } = await supabase
    .from("students")
    .insert(students)
    .select();

  if (error) throw error;
  return data;
}

// ==================== PAYMENTS (diverse, including advance payments) ====================
async function seedPayments(students) {
  const payments = [
    // Term 1 payments (completed)
    {
      student_id: students[0].student_id,
      payment_date: "2025-01-10",
      status: "completed",
      payment_method: "bank_transfer",
    },
    {
      student_id: students[1].student_id,
      payment_date: "2025-01-12",
      status: "completed",
      payment_method: "cash",
    },
    {
      student_id: students[2].student_id,
      payment_date: "2025-01-15",
      status: "completed",
      payment_method: "credit_card",
    },
    {
      student_id: students[3].student_id,
      payment_date: "2025-01-08",
      status: "completed",
      payment_method: "bank_transfer",
    },
    {
      student_id: students[4].student_id,
      payment_date: "2025-01-20",
      status: "completed",
      payment_method: "cash",
    },
    {
      student_id: students[5].student_id,
      payment_date: "2025-01-18",
      status: "completed",
      payment_method: "bank_transfer",
    },
    {
      student_id: students[6].student_id,
      payment_date: "2025-01-22",
      status: "completed",
      payment_method: "credit_card",
    },
    {
      student_id: students[7].student_id,
      payment_date: "2025-01-14",
      status: "completed",
      payment_method: "bank_transfer",
    },

    // Pending payments for Term 1
    {
      student_id: students[8].student_id,
      payment_date: "2025-01-25",
      status: "pending",
      payment_method: "bank_transfer",
    },
    {
      student_id: students[9].student_id,
      payment_date: "2025-01-28",
      status: "pending",
      payment_method: "cash",
    },

    // ADVANCE payments - Term 2 paid in Term 1 (some parents pay ahead)
    {
      student_id: students[0].student_id,
      payment_date: "2025-02-01",
      status: "completed",
      payment_method: "bank_transfer",
    }, // Chanda's T2 paid early
    {
      student_id: students[3].student_id,
      payment_date: "2025-01-25",
      status: "completed",
      payment_method: "bank_transfer",
    }, // Kelvin's T2 paid early
    {
      student_id: students[7].student_id,
      payment_date: "2025-02-05",
      status: "completed",
      payment_method: "credit_card",
    }, // Timothy's T2 paid early

    // SUPER ADVANCE - Term 2 AND Term 3 paid (full year payment)
    {
      student_id: students[1].student_id,
      payment_date: "2025-01-15",
      status: "completed",
      payment_method: "bank_transfer",
    }, // Mutale's T2
    {
      student_id: students[1].student_id,
      payment_date: "2025-01-15",
      status: "completed",
      payment_method: "bank_transfer",
    }, // Mutale's T3

    // Failed/refunded payments
    {
      student_id: students[10].student_id,
      payment_date: "2025-01-30",
      status: "failed",
      payment_method: "credit_card",
    },
    {
      student_id: students[11].student_id,
      payment_date: "2025-02-02",
      status: "refunded",
      payment_method: "bank_transfer",
    },

    // More completed payments
    {
      student_id: students[12].student_id,
      payment_date: "2025-01-16",
      status: "completed",
      payment_method: "cash",
    },
    {
      student_id: students[13].student_id,
      payment_date: "2025-01-19",
      status: "completed",
      payment_method: "bank_transfer",
    },
    {
      student_id: students[14].student_id,
      payment_date: "2025-01-21",
      status: "completed",
      payment_method: "credit_card",
    },
  ];

  const { data, error } = await supabase
    .from("payments")
    .insert(payments)
    .select();

  if (error) throw error;
  return data;
}

// ==================== PAYMENT LINES (diverse combinations) ====================
async function seedPaymentLines(payments, serviceTypes) {
  const tuition = serviceTypes.find((s) => s.name === "Tuition");
  const boarding = serviceTypes.find((s) => s.name === "Boarding");
  const lunch = serviceTypes.find((s) => s.name === "Lunch");
  const transport = serviceTypes.find((s) => s.name === "Transport");

  const paymentLines = [
    // Payment 0: Chanda - Term 1 (Tuition + Lunch)
    {
      payment_id: payments[0].payment_id,
      service_type_id: tuition.service_type_id,
      term: 1,
      year: 2025,
      price: 2800.0,
    },
    {
      payment_id: payments[0].payment_id,
      service_type_id: lunch.service_type_id,
      term: 1,
      year: 2025,
      price: 850.0,
    },

    // Payment 1: Mutale - Term 1 (Full package)
    {
      payment_id: payments[1].payment_id,
      service_type_id: tuition.service_type_id,
      term: 1,
      year: 2025,
      price: 3000.0,
    },
    {
      payment_id: payments[1].payment_id,
      service_type_id: boarding.service_type_id,
      term: 1,
      year: 2025,
      price: 3500.0,
    },
    {
      payment_id: payments[1].payment_id,
      service_type_id: lunch.service_type_id,
      term: 1,
      year: 2025,
      price: 850.0,
    },

    // Payment 2: Natasha - Term 1 (Tuition + Transport)
    {
      payment_id: payments[2].payment_id,
      service_type_id: tuition.service_type_id,
      term: 1,
      year: 2025,
      price: 2700.0,
    },
    {
      payment_id: payments[2].payment_id,
      service_type_id: transport.service_type_id,
      term: 1,
      year: 2025,
      price: 1200.0,
    },

    // Payment 3: Kelvin - Term 1 (Tuition only - Grade 7)
    {
      payment_id: payments[3].payment_id,
      service_type_id: tuition.service_type_id,
      term: 1,
      year: 2025,
      price: 3200.0,
    },

    // Payment 4: Linda - Term 1 (Tuition + Lunch + Transport)
    {
      payment_id: payments[4].payment_id,
      service_type_id: tuition.service_type_id,
      term: 1,
      year: 2025,
      price: 2900.0,
    },
    {
      payment_id: payments[4].payment_id,
      service_type_id: lunch.service_type_id,
      term: 1,
      year: 2025,
      price: 850.0,
    },
    {
      payment_id: payments[4].payment_id,
      service_type_id: transport.service_type_id,
      term: 1,
      year: 2025,
      price: 1200.0,
    },

    // Payment 5: Mwansa - Term 1 (Full package with boarding)
    {
      payment_id: payments[5].payment_id,
      service_type_id: tuition.service_type_id,
      term: 1,
      year: 2025,
      price: 2900.0,
    },
    {
      payment_id: payments[5].payment_id,
      service_type_id: boarding.service_type_id,
      term: 1,
      year: 2025,
      price: 3500.0,
    },
    {
      payment_id: payments[5].payment_id,
      service_type_id: lunch.service_type_id,
      term: 1,
      year: 2025,
      price: 850.0,
    },

    // Payment 6: Bwalya - Term 1 (Grade 1, Tuition only)
    {
      payment_id: payments[6].payment_id,
      service_type_id: tuition.service_type_id,
      term: 1,
      year: 2025,
      price: 2600.0,
    },

    // Payment 7: Timothy - Term 1 (Tuition + Transport)
    {
      payment_id: payments[7].payment_id,
      service_type_id: tuition.service_type_id,
      term: 1,
      year: 2025,
      price: 3100.0,
    },
    {
      payment_id: payments[7].payment_id,
      service_type_id: transport.service_type_id,
      term: 1,
      year: 2025,
      price: 1200.0,
    },

    // Payment 8: Precious - Term 1 (Pending - Tuition)
    {
      payment_id: payments[8].payment_id,
      service_type_id: tuition.service_type_id,
      term: 1,
      year: 2025,
      price: 2800.0,
    },

    // Payment 9: Emmanuel - Term 1 (Pending - Full)
    {
      payment_id: payments[9].payment_id,
      service_type_id: tuition.service_type_id,
      term: 1,
      year: 2025,
      price: 3000.0,
    },
    {
      payment_id: payments[9].payment_id,
      service_type_id: boarding.service_type_id,
      term: 1,
      year: 2025,
      price: 3500.0,
    },

    // Payment 10: Chanda - ADVANCE Term 2 payment
    {
      payment_id: payments[10].payment_id,
      service_type_id: tuition.service_type_id,
      term: 2,
      year: 2025,
      price: 2800.0,
    },
    {
      payment_id: payments[10].payment_id,
      service_type_id: lunch.service_type_id,
      term: 2,
      year: 2025,
      price: 850.0,
    },

    // Payment 11: Kelvin - ADVANCE Term 2 payment
    {
      payment_id: payments[11].payment_id,
      service_type_id: tuition.service_type_id,
      term: 2,
      year: 2025,
      price: 3200.0,
    },

    // Payment 12: Timothy - ADVANCE Term 2 payment
    {
      payment_id: payments[12].payment_id,
      service_type_id: tuition.service_type_id,
      term: 2,
      year: 2025,
      price: 3100.0,
    },
    {
      payment_id: payments[12].payment_id,
      service_type_id: transport.service_type_id,
      term: 2,
      year: 2025,
      price: 1200.0,
    },

    // Payment 13: Mutale - ADVANCE Term 2 (full year payer)
    {
      payment_id: payments[13].payment_id,
      service_type_id: tuition.service_type_id,
      term: 2,
      year: 2025,
      price: 3000.0,
    },
    {
      payment_id: payments[13].payment_id,
      service_type_id: boarding.service_type_id,
      term: 2,
      year: 2025,
      price: 3500.0,
    },
    {
      payment_id: payments[13].payment_id,
      service_type_id: lunch.service_type_id,
      term: 2,
      year: 2025,
      price: 850.0,
    },

    // Payment 14: Mutale - SUPER ADVANCE Term 3 (full year payer)
    {
      payment_id: payments[14].payment_id,
      service_type_id: tuition.service_type_id,
      term: 3,
      year: 2025,
      price: 3000.0,
    },
    {
      payment_id: payments[14].payment_id,
      service_type_id: boarding.service_type_id,
      term: 3,
      year: 2025,
      price: 3500.0,
    },
    {
      payment_id: payments[14].payment_id,
      service_type_id: lunch.service_type_id,
      term: 3,
      year: 2025,
      price: 850.0,
    },

    // Payment 15: Faith - Failed payment had attempted
    {
      payment_id: payments[15].payment_id,
      service_type_id: tuition.service_type_id,
      term: 1,
      year: 2025,
      price: 2700.0,
    },

    // Payment 16: Daniel - Refunded
    {
      payment_id: payments[16].payment_id,
      service_type_id: tuition.service_type_id,
      term: 1,
      year: 2025,
      price: 3100.0,
    },

    // Payment 17: Hope - Term 1 (New Grade 1)
    {
      payment_id: payments[17].payment_id,
      service_type_id: tuition.service_type_id,
      term: 1,
      year: 2025,
      price: 2600.0,
    },
    {
      payment_id: payments[17].payment_id,
      service_type_id: transport.service_type_id,
      term: 1,
      year: 2025,
      price: 1200.0,
    },

    // Payment 18: Blessing - Term 1 (Grade 7 boarder)
    {
      payment_id: payments[18].payment_id,
      service_type_id: tuition.service_type_id,
      term: 1,
      year: 2025,
      price: 3200.0,
    },
    {
      payment_id: payments[18].payment_id,
      service_type_id: boarding.service_type_id,
      term: 1,
      year: 2025,
      price: 3500.0,
    },

    // Payment 19: Charity - Term 1 (Full package)
    {
      payment_id: payments[19].payment_id,
      service_type_id: tuition.service_type_id,
      term: 1,
      year: 2025,
      price: 2900.0,
    },
    {
      payment_id: payments[19].payment_id,
      service_type_id: lunch.service_type_id,
      term: 1,
      year: 2025,
      price: 850.0,
    },
    {
      payment_id: payments[19].payment_id,
      service_type_id: transport.service_type_id,
      term: 1,
      year: 2025,
      price: 1200.0,
    },
  ];

  const { error } = await supabase.from("payment_lines").insert(paymentLines);

  if (error) throw error;
}

// ==================== USER PROFILE ====================
async function seedUserProfile(userId) {
  const profile = {
    user_id: userId,
    first_name: "Admin",
    last_name: "User",
    phone_number: "+260977000000",
    email: "admin@twalumbu.edu.zm",
  };

  const { error } = await supabase
    .from("profiles")
    .upsert(profile, { onConflict: "user_id" });

  if (error) throw error;
}

// ==================== USER PREFERENCES ====================
async function seedUserPreferences(userId) {
  const preferences = {
    user_id: userId,
    settings: {
      theme: "light",
      notifications_enabled: true,
      email_alerts: true,
    },
    auto_fill_phone: true,
  };

  const { error } = await supabase
    .from("user_preferences")
    .upsert(preferences, { onConflict: "user_id" });

  if (error) throw error;
}

// ==================== INVOICES (10+ invoices) ====================
async function seedInvoices(userId, students) {
  const invoices = [
    // Pending invoices
    {
      user_id: userId,
      student_id: students[8].student_id,
      due_date: "2025-02-15",
      status: "pending",
    },
    {
      user_id: userId,
      student_id: students[9].student_id,
      due_date: "2025-02-15",
      status: "pending",
    },
    {
      user_id: userId,
      student_id: students[10].student_id,
      due_date: "2025-02-20",
      status: "pending",
    },

    // Paid invoices
    {
      user_id: userId,
      student_id: students[0].student_id,
      due_date: "2025-01-31",
      status: "paid",
    },
    {
      user_id: userId,
      student_id: students[1].student_id,
      due_date: "2025-01-31",
      status: "paid",
    },
    {
      user_id: userId,
      student_id: students[2].student_id,
      due_date: "2025-01-31",
      status: "paid",
    },
    {
      user_id: userId,
      student_id: students[3].student_id,
      due_date: "2025-01-31",
      status: "paid",
    },
    {
      user_id: userId,
      student_id: students[4].student_id,
      due_date: "2025-01-31",
      status: "paid",
    },

    // Overdue invoices
    {
      user_id: userId,
      student_id: students[11].student_id,
      due_date: "2025-01-15",
      status: "overdue",
    },
    {
      user_id: userId,
      student_id: students[12].student_id,
      due_date: "2025-01-20",
      status: "overdue",
    },

    // Cancelled invoice
    {
      user_id: userId,
      student_id: students[13].student_id,
      due_date: "2025-01-25",
      status: "cancelled",
    },

    // Term 2 invoices (advance)
    {
      user_id: userId,
      student_id: students[5].student_id,
      due_date: "2025-05-15",
      status: "pending",
    },
  ];

  const { data, error } = await supabase
    .from("invoices")
    .insert(invoices)
    .select();

  if (error) throw error;
  return data;
}

// ==================== INVOICE INFO LINES ====================
async function seedInvoiceInfoLines(invoices, serviceTypes) {
  const tuition = serviceTypes.find((s) => s.name === "Tuition");
  const boarding = serviceTypes.find((s) => s.name === "Boarding");
  const lunch = serviceTypes.find((s) => s.name === "Lunch");
  const transport = serviceTypes.find((s) => s.name === "Transport");

  const invoiceLines = [
    // Invoice 0: Precious pending
    {
      invoice_id: invoices[0].invoice_id,
      service_type_id: tuition.service_type_id,
      term: 1,
      year: 2025,
      price: 2800.0,
    },
    {
      invoice_id: invoices[0].invoice_id,
      service_type_id: lunch.service_type_id,
      term: 1,
      year: 2025,
      price: 850.0,
    },

    // Invoice 1: Emmanuel pending (full package)
    {
      invoice_id: invoices[1].invoice_id,
      service_type_id: tuition.service_type_id,
      term: 1,
      year: 2025,
      price: 3000.0,
    },
    {
      invoice_id: invoices[1].invoice_id,
      service_type_id: boarding.service_type_id,
      term: 1,
      year: 2025,
      price: 3500.0,
    },
    {
      invoice_id: invoices[1].invoice_id,
      service_type_id: lunch.service_type_id,
      term: 1,
      year: 2025,
      price: 850.0,
    },

    // Invoice 2: Faith pending
    {
      invoice_id: invoices[2].invoice_id,
      service_type_id: tuition.service_type_id,
      term: 1,
      year: 2025,
      price: 2700.0,
    },
    {
      invoice_id: invoices[2].invoice_id,
      service_type_id: transport.service_type_id,
      term: 1,
      year: 2025,
      price: 1200.0,
    },

    // Invoice 3-7: Paid invoices with various services
    {
      invoice_id: invoices[3].invoice_id,
      service_type_id: tuition.service_type_id,
      term: 1,
      year: 2025,
      price: 2800.0,
    },
    {
      invoice_id: invoices[4].invoice_id,
      service_type_id: tuition.service_type_id,
      term: 1,
      year: 2025,
      price: 3000.0,
    },
    {
      invoice_id: invoices[4].invoice_id,
      service_type_id: boarding.service_type_id,
      term: 1,
      year: 2025,
      price: 3500.0,
    },
    {
      invoice_id: invoices[5].invoice_id,
      service_type_id: tuition.service_type_id,
      term: 1,
      year: 2025,
      price: 2700.0,
    },
    {
      invoice_id: invoices[6].invoice_id,
      service_type_id: tuition.service_type_id,
      term: 1,
      year: 2025,
      price: 3200.0,
    },
    {
      invoice_id: invoices[7].invoice_id,
      service_type_id: tuition.service_type_id,
      term: 1,
      year: 2025,
      price: 2900.0,
    },
    {
      invoice_id: invoices[7].invoice_id,
      service_type_id: transport.service_type_id,
      term: 1,
      year: 2025,
      price: 1200.0,
    },

    // Invoice 8-9: Overdue
    {
      invoice_id: invoices[8].invoice_id,
      service_type_id: tuition.service_type_id,
      term: 1,
      year: 2025,
      price: 3100.0,
    },
    {
      invoice_id: invoices[8].invoice_id,
      service_type_id: boarding.service_type_id,
      term: 1,
      year: 2025,
      price: 3500.0,
    },
    {
      invoice_id: invoices[9].invoice_id,
      service_type_id: tuition.service_type_id,
      term: 1,
      year: 2025,
      price: 2600.0,
    },

    // Invoice 10: Cancelled
    {
      invoice_id: invoices[10].invoice_id,
      service_type_id: tuition.service_type_id,
      term: 1,
      year: 2025,
      price: 3200.0,
    },

    // Invoice 11: Term 2 advance
    {
      invoice_id: invoices[11].invoice_id,
      service_type_id: tuition.service_type_id,
      term: 2,
      year: 2025,
      price: 2900.0,
    },
    {
      invoice_id: invoices[11].invoice_id,
      service_type_id: boarding.service_type_id,
      term: 2,
      year: 2025,
      price: 3500.0,
    },
    {
      invoice_id: invoices[11].invoice_id,
      service_type_id: lunch.service_type_id,
      term: 2,
      year: 2025,
      price: 850.0,
    },
  ];

  const { error } = await supabase
    .from("invoice_info_lines")
    .insert(invoiceLines);

  if (error) throw error;
}

// ==================== NOTIFICATIONS (10 notifications) ====================
async function seedNotifications(userId, students) {
  const notifications = [
    {
      user_id: userId,
      student_id: students[0].student_id,
      message:
        "Payment for Chanda Mwale's Term 1 tuition has been received. Thank you!",
      type: "info",
      is_read: false,
    },
    {
      user_id: userId,
      student_id: students[1].student_id,
      message:
        "Mutale Mwale is now fully paid for the entire 2025 academic year. Thank you for paying in advance!",
      type: "info",
      is_read: false,
    },
    {
      user_id: userId,
      student_id: students[8].student_id,
      message:
        "Reminder: Precious Mulenga's Term 1 fees are due on February 15, 2025.",
      type: "reminder",
      is_read: false,
    },
    {
      user_id: userId,
      student_id: students[11].student_id,
      message:
        "URGENT: Daniel Mumba's Term 1 fees are overdue. Please make payment immediately.",
      type: "alert",
      is_read: false,
    },
    {
      user_id: userId,
      student_id: null,
      message: "New pricing structure has been updated for 2025 academic year.",
      type: "info",
      is_read: true,
    },
    {
      user_id: userId,
      student_id: students[3].student_id,
      message:
        "Kelvin Phiri's advance payment for Term 2 has been processed successfully.",
      type: "info",
      is_read: false,
    },
    {
      user_id: userId,
      student_id: students[10].student_id,
      message:
        "Payment failed for Faith Chisanga. Please try a different payment method.",
      type: "alert",
      is_read: false,
    },
    {
      user_id: userId,
      student_id: null,
      message:
        "School will be closed from December 15 to January 5 for holidays.",
      type: "info",
      is_read: true,
    },
    {
      user_id: userId,
      student_id: students[6].student_id,
      message:
        "Welcome! Bwalya Tembo has been successfully enrolled in Grade 1.",
      type: "info",
      is_read: true,
    },
    {
      user_id: userId,
      student_id: students[12].student_id,
      message:
        "Reminder: Hope Lungu's transport fee is due with the tuition payment.",
      type: "reminder",
      is_read: false,
    },
  ];

  const { error } = await supabase.from("notifications").insert(notifications);

  if (error) throw error;
}

// ==================== CLEAR ALL DATA ====================
export async function clearAllSeedData() {
  try {
    console.log("🗑️ Clearing all seed data...");

    // Delete in reverse order of dependencies
    await supabase
      .from("notifications")
      .delete()
      .neq("notification_id", "00000000-0000-0000-0000-000000000000");
    await supabase
      .from("invoice_info_lines")
      .delete()
      .neq("invoice_info_line_id", "00000000-0000-0000-0000-000000000000");
    await supabase
      .from("invoices")
      .delete()
      .neq("invoice_id", "00000000-0000-0000-0000-000000000000");
    await supabase
      .from("payment_lines")
      .delete()
      .neq("payment_line_id", "00000000-0000-0000-0000-000000000000");
    await supabase
      .from("payments")
      .delete()
      .neq("payment_id", "00000000-0000-0000-0000-000000000000");
    await supabase
      .from("students")
      .delete()
      .neq("student_id", "00000000-0000-0000-0000-000000000000");
    await supabase
      .from("parents")
      .delete()
      .neq("parent_id", "00000000-0000-0000-0000-000000000000");
    await supabase
      .from("school_service_pricings")
      .delete()
      .neq("school_service_pricing_id", "00000000-0000-0000-0000-000000000000");
    await supabase
      .from("schools")
      .delete()
      .neq("school_id", "00000000-0000-0000-0000-000000000000");
    await supabase
      .from("addresses")
      .delete()
      .neq("address_id", "00000000-0000-0000-0000-000000000000");
    await supabase
      .from("service_types")
      .delete()
      .neq("service_type_id", "00000000-0000-0000-0000-000000000000");
    await supabase
      .from("user_preferences")
      .delete()
      .neq("preference_id", "00000000-0000-0000-0000-000000000000");
    await supabase
      .from("profiles")
      .delete()
      .neq("user_id", "00000000-0000-0000-0000-000000000000");

    console.log("✅ All seed data cleared!");
    return { success: true, message: "All data cleared!" };
  } catch (error) {
    console.error("❌ Error clearing data:", error);
    return { success: false, message: error.message };
  }
}
