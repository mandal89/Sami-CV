      
    let isArabic = false; // بدء اللغة الإنجليزية

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
      document.body.style.direction = isArabic ? translations.ar.direction : translations.en.direction;
      document.body.style.textAlign = isArabic ? translations.ar.textAlign : translations.en.textAlign;

      document.getElementById("name").innerHTML = isArabic ? translations.ar.name : translations.en.name;
      document.getElementById("summary-title").innerHTML = isArabic ? translations.ar.summaryTitle : translations.en.summaryTitle;
      document.getElementById("summary-text").innerHTML = isArabic ? translations.ar.summaryText : translations.en.summaryText;
      document.getElementById("personal-info-title").innerHTML = isArabic ? translations.ar.personalInfoTitle : translations.en.personalInfoTitle;
      document.getElementById("name-label").innerHTML = isArabic ? translations.ar.nameLabel : translations.en.nameLabel;
      document.getElementById("id-label").innerHTML = isArabic ? translations.ar.idLabel : translations.en.idLabel;
      document.getElementById("dob-label").innerHTML = isArabic ? translations.ar.dobLabel : translations.en.dobLabel;
      document.getElementById("address-label").innerHTML = isArabic ? translations.ar.addressLabel : translations.en.addressLabel;
      document.getElementById("phone-label").innerHTML = isArabic ? translations.ar.phoneLabel : translations.en.phoneLabel;
      document.getElementById("email-label").innerHTML = isArabic ? translations.ar.emailLabel : translations.en.emailLabel;
      document.getElementById("experience-title").innerHTML = isArabic ? translations.ar.experienceTitle : translations.en.experienceTitle;
      document.getElementById("job1-title").innerHTML = isArabic ? translations.ar.job1Title : translations.en.job1Title;
      document.getElementById("job1-item1").innerHTML = isArabic ? translations.ar.job1Item1 : translations.en.job1Item1;
      document.getElementById("job2-title").innerHTML = isArabic ? translations.ar.job2Title : translations.en.job2Title;
      document.getElementById("job2-item1").innerHTML = isArabic ? translations.ar.job2Item1 : translations.en.job2Item1;
      document.getElementById("job2-item2").innerHTML = isArabic ? translations.ar.job2Item2 : translations.en.job2Item2;
      document.getElementById("job3-title").innerHTML = isArabic ? translations.ar.job3Title : translations.en.job3Title;
      document.getElementById("job3-item1").innerHTML = isArabic ? translations.ar.job3Item1 : translations.en.job3Item1;
      document.getElementById("education-title").innerHTML = isArabic ? translations.ar.educationTitle : translations.en.educationTitle;
      document.getElementById("education-text").innerHTML = isArabic ? translations.ar.educationText : translations.en.educationText;
      document.getElementById("skills-title").innerHTML = isArabic ? translations.ar.skillsTitle : translations.en.skillsTitle;
      document.getElementById("skills-text").innerHTML = isArabic ? translations.ar.skillsText : translations.en.skillsText;
      document.getElementById("languages-text").innerHTML = isArabic ? translations.ar.languagesText : translations.en.languagesText;
      document.getElementById("tech-skills-text").innerHTML = isArabic ? translations.ar.techSkillsText : translations.en.techSkillsText;
document.getElementById("translate-btn").innerText = isArabic ? "English" : "عربي"; 
      // Update the float direction for profile picture based on the current language
      document.getElementById("profilePic").style.float = isArabic ? translations.ar.floatDirection : translations.en.floatDirection;
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
        window.open(url, "_blank");
      }
    }
