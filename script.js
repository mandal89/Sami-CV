      
    let isArabic = false;

    const translations = {
      ar: {
          
        direction: "rtl",
        textAlign: "right",
        floatDirection: "right",
          
        name: "سامي محمد رشدي التميمي",
        summaryTitle: "ملخص مهني",
        summaryText: "شخصٌ متعدد المهارات وذو خبرة واسعة في بيئات عمل متنوعة، بما في ذلك الخدمات اللوجستية والتجزئة والتعليم العالي. يتميز بمهارات قوية في التواصل والعمل الجماعي، بالإضافة إلى مهارات تقنية متقدمة في مجال التصميم ثلاثي الأبعاد وتعديل الصور. يسعى للحصول على فرصة عمل تمكنه من الاستفادة من خبرته ومهاراته في تطوير مهني مستدام.",
        personalInfoTitle: "البيانات الشخصية",
        nameLabel: "الاسم: سامي محمد رشدي التميمي",
        idLabel: "رقم الهوية: 411669161",
        dobLabel: "تاريخ الميلاد: 7/12/1989",
        addressLabel: "العنوان: فلسطين، رام الله، النبي صالح",
        phoneLabel: "الهاتف: <a href='https://wa.me/972597910020'>0597910020</a>",
        emailLabel: "البريد الإلكتروني: <a href='mailto:samimt08@hotmail.com'>samimt08@hotmail.com</a>",
        experienceTitle: "الخبرات العملية",
        job1Title: "جامعة القدس (2017 - 2023)",
        job1Item1: "حارس / مراسل / موظف استقبال: مسؤول عن تأمين المبنى، واستقبال الزوار، وإدارة المراسلات. ساهم في تحسين إجراءات الأمن أو تقديم خدمة عملاء ممتازة.",
        job2Title: "شركة البشير للمفرزات: عامل / مشرف (2014 - 2017)",
        job2Item1: "زيادة الإنتاجية: تنظيم عمل الفريق وتبسيط الإجراءات، مما أدى إلى زيادة الإنتاجية بنسبة 15% خلال الربع الأخير من 2016.",
        job2Item2: "مراقبة الجودة: تطوير نظام جديد لمراجعة السلع الواردة، مما قلل نسبة المنتجات التالفة بنسبة 10% خلال الربع الأخير من 2016.",
        job3Title: "أعمال حرة: عامل تنظيف، بائع خضار، موظف سوبرماركت (2008 - 2013)",
        job3Item1: "اكتسبت مهارات قيمة في التفاعل مع العملاء، وإدارة الوقت، والعمل تحت الضغط. ساعدت الأعمال الحرة في تطوير مهاراتي الشخصية والاجتماعية.",
        educationTitle: "التعليم",
        educationText: "شهادة الثانوية العامة: (2020) دراسة خاصة",
        skillsTitle: "المهارات",
        skillsText: "<strong>الحاسوب:</strong> البرمجة، الكتابة، برامج الأوفيس (وورد، إكسل، باوربوينت)",
        languagesText: "<strong>اللغات:</strong> الإنجليزية، العربية",
        techSkillsText: "<strong>التقنية:</strong> التصميم ثلاثي الأبعاد: 3D Max، SketchUp، Blender، Unity، Maya | تحرير الصور: Photoshop، Illustrator، Corel Draw، InDesign",
      },
      en: {
          
        direction: "ltr",
        textAlign: "left",
        floatDirection: "left",
        name: "Sami Mohammed Rushdi Al-Tamimi",
        summaryTitle: "Professional Summary",
        summaryText: "A versatile and skilled individual with extensive experience in diverse work environments, including logistics, retail, and higher education. Possesses strong communication and teamwork skills, as well as advanced technical skills in 3D design and photo editing. Seeking an employment opportunity that allows me to leverage my expertise and skills for sustainable career development.",
        personalInfoTitle: "Personal Information",
        nameLabel: "Name: Sami Mohammed Rushdi Al-Tamimi",
        idLabel: "ID Number: 411669161",
        dobLabel: "Date of Birth: 7/12/1989",
        addressLabel: "Address: Palestine, Ramallah, Nabi Saleh",
        phoneLabel: "Phone: <a href='https://wa.me/972597910020'>0597910020</a>",
        emailLabel: "Email: <a href='mailto:samimt08@hotmail.com'>samimt08@hotmail.com</a>",
        experienceTitle: "Work Experience",
        job1Title: "Al-Quds University (2017 - 2023)",
        job1Item1: "Guard / Messenger / Receptionist: Responsible for securing the building, greeting visitors, and managing correspondence. Contributed to improving security procedures or providing excellent customer service.",
        job2Title: "Al-Bashir Company for Frozen Food Worker / Supervisor (2014 - 2017)",
        job2Item1: "Increased Productivity: Organized the team's work and streamlined procedures, resulting in a 15% increase in productivity during the last quarter of 2016.",
        job2Item2: "Quality Control: Developed a new system for auditing incoming goods, reducing the percentage of damaged products by 10% during the last quarter of 2016.",
        job3Title: "Freelance Work: Cleaning Worker, Vegetable Seller, Supermarket Employee (2008 - 2013)",
        job3Item1: "Gained valuable skills in customer interaction, time management, and working under pressure. Freelance work helped develop my personal and social skills.",
        educationTitle: "Education",
        educationText: "High School Diploma: (2020) Self-education",
        skillsTitle: "Skills",
        skillsText: "<strong>Computer:</strong> Programming, Typing, Office (Word, Excel, PowerPoint)",
        languagesText: "<strong>Languages:</strong> English, Arabic",
        techSkillsText: "<strong>Technical:</strong> 3D Design: 3D Max, SketchUp, Blender, Unity, Maya | Photo Editing: Photoshop, Illustrator, Corel Draw, InDesign",
      },
    };

    function toggleLanguage() {
      isArabic = !isArabic;
     const language = isArabic ? translations.ar : translations.en;
     document.documentElement.lang = isArabic ? "ar" : "en";
     document.documentElement.dir = language.direction;
     document.body.style.textAlign = language.textAlign;

     const fields = {
       name: "name", summaryTitle: "summary-title", summaryText: "summary-text",
       personalInfoTitle: "personal-info-title", nameLabel: "name-label", idLabel: "id-label",
       dobLabel: "dob-label", addressLabel: "address-label", phoneLabel: "phone-label",
       emailLabel: "email-label", experienceTitle: "experience-title", job1Title: "job1-title",
       job1Item1: "job1-item1", job2Title: "job2-title", job2Item1: "job2-item1",
       job2Item2: "job2-item2", job3Title: "job3-title", job3Item1: "job3-item1",
       educationTitle: "education-title", educationText: "education-text", skillsTitle: "skills-title",
       skillsText: "skills-text", languagesText: "languages-text", techSkillsText: "tech-skills-text"
     };
     Object.entries(fields).forEach(([key, id]) => {
       document.getElementById(id).innerHTML = language[key];
     });
     document.getElementById("translate-btn").innerText = isArabic ? "English" : "عربي";
    }

    function downloadPDF() {
      const select = document.getElementById("pdf-select");
      const value = select.value;
      let url = "";
      if (value === "arabic") {
        url = "السيرة الذاتية لسامي محمد رشدي التميمي.pdf";
      } else if (value === "english") {
        url = "Resume of Sami Mohammed Rashdi Al-Tamimi.pdf";
      }
      if (url) {
        window.open(url, "_blank", "noopener,noreferrer");
        select.value = "";
      }
    }

    document.getElementById("translate-btn").addEventListener("click", toggleLanguage);
    document.getElementById("pdf-select").addEventListener("change", downloadPDF);
