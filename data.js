// =====================================================================
// FILE KONTEN PORTOFOLIO
// Semua isi website ada di sini. Edit file ini untuk mengganti konten.
//
// Aturan penulisan:
// - Teks dua bahasa ditulis: { en: "Teks Inggris", id: "Teks Indonesia" }
// - Jika teksnya sama di kedua bahasa, cukup tulis string biasa: "Arduino"
// - Path gambar/file relatif terhadap index.html, contoh: "assets/img/profile.jpg"
// - Isi dengan "" (kosong) untuk menyembunyikan elemen opsional
// - Untuk menambah item (proyek, skill, dll.), salin satu blok { ... },
//   tempel di bawahnya, pastikan ada koma di antara blok, lalu ganti isinya
// =====================================================================

const CONTENT = {
  // ---------- PROFIL (bagian paling atas) ----------
  profile: {
    name: "Your Full Name",
    shortName: "YourName", // tampil sebagai logo di navbar
    role: {
      en: "Electrical Engineering Student",
      id: "Mahasiswa Teknik Elektro",
    },
    tagline: {
      en: "I design embedded systems, build circuits, and turn ideas into working hardware, from schematic and PCB to firmware.",
      id: "Saya merancang sistem embedded, membuat rangkaian, dan mengubah ide menjadi hardware yang berfungsi, mulai dari skematik dan PCB hingga firmware.",
    },
    location: "Jakarta, Indonesia",
    photo: "", // contoh: "assets/img/profile.jpg" (kosong = tampil inisial nama)
    cv: "", // contoh: "assets/cv.pdf" (kosong = tombol CV disembunyikan)
    email: "youremail@example.com",
    socials: [
      {
        label: "GitHub",
        icon: "github",
        url: "https://github.com/username",
      },
      {
        label: "LinkedIn",
        icon: "linkedin",
        url: "https://www.linkedin.com/in/username",
      },
    ],
  },

  // ---------- TENTANG SAYA ----------
  about: {
    paragraphs: [
      {
        en: "I am an electrical engineering student who enjoys the moment a circuit on paper becomes a device that actually works. My main interests are embedded systems, power electronics, and IoT.",
        id: "Saya mahasiswa teknik elektro yang menikmati momen ketika rangkaian di atas kertas menjadi perangkat yang benar-benar berfungsi. Minat utama saya adalah sistem embedded, elektronika daya, dan IoT.",
      },
      {
        en: "Through lab work, internships, and personal projects, I have learned to take a design through every stage: simulation, PCB layout, assembly, firmware, and testing with real instruments.",
        id: "Melalui kegiatan laboratorium, magang, dan proyek pribadi, saya belajar membawa sebuah desain melewati setiap tahap: simulasi, layout PCB, perakitan, firmware, hingga pengujian dengan alat ukur sungguhan.",
      },
    ],
    highlights: [
      {
        value: "4+",
        label: { en: "Hardware Projects", id: "Proyek Hardware" },
      },
      {
        value: "2",
        label: { en: "Years as Lab Assistant", id: "Tahun Asisten Lab" },
      },
      {
        value: "15+",
        label: { en: "Tools & Technologies", id: "Tools & Teknologi" },
      },
    ],
  },

  // ---------- KEAHLIAN ----------
  skills: [
    {
      category: { en: "Microcontrollers & Embedded", id: "Mikrokontroler & Embedded" },
      items: ["Arduino", "ESP32", "STM32", "Raspberry Pi", "FreeRTOS"],
    },
    {
      category: { en: "Circuit & PCB Design", id: "Desain Rangkaian & PCB" },
      items: ["KiCad", "EasyEDA", "Altium Designer"],
    },
    {
      category: { en: "Simulation & Analysis", id: "Simulasi & Analisis" },
      items: ["LTspice", "Proteus", "MATLAB", "Simulink"],
    },
    {
      category: { en: "Programming", id: "Pemrograman" },
      items: ["C/C++", "Python", "PlatformIO"],
    },
    {
      category: { en: "IoT & Communication", id: "IoT & Komunikasi" },
      items: ["MQTT", "Wi-Fi", "Bluetooth", "I2C", "SPI", "UART", "Modbus"],
    },
    {
      category: { en: "Lab & Workshop", id: "Lab & Workshop" },
      items: ["Oscilloscope", "Multimeter", "Function Generator", "Soldering", "PLC Basics"],
    },
  ],

  // ---------- PROYEK ----------
  projects: [
    {
      title: { en: "Smart Home Energy Monitor", id: "Monitor Energi Rumah Pintar" },
      year: "2025",
      description: {
        en: "A Wi-Fi energy meter that measures voltage, current, and power consumption in real time and sends the data to a web dashboard over MQTT.",
        id: "Alat ukur energi berbasis Wi-Fi yang mengukur tegangan, arus, dan konsumsi daya secara real-time, lalu mengirim datanya ke dashboard web melalui MQTT.",
      },
      image: "", // contoh: "assets/img/energy-monitor.jpg"
      tags: ["ESP32", "PZEM-004T", "MQTT", "C++"],
      links: {
        code: "https://github.com/username/energy-monitor",
        demo: "",
        video: "",
      },
    },
    {
      title: { en: "PID Line Follower Robot", id: "Robot Line Follower PID" },
      year: "2024",
      description: {
        en: "A fast line follower robot using an IR sensor array and a tuned PID controller for smooth cornering. Placed 2nd in a regional robotics competition.",
        id: "Robot line follower cepat dengan sensor IR array dan kontrol PID yang di-tuning agar mulus saat menikung. Meraih juara 2 lomba robotik tingkat regional.",
      },
      image: "",
      tags: ["Arduino Nano", "PID Control", "L298N", "IR Sensor"],
      links: {
        code: "https://github.com/username/line-follower",
        demo: "",
        video: "https://youtube.com/",
      },
    },
    {
      title: { en: "12V to 5V Buck Converter", id: "Buck Converter 12V ke 5V" },
      year: "2024",
      description: {
        en: "A 3A synchronous buck converter designed and simulated in LTspice, then laid out as a 2-layer PCB in KiCad with about 90% measured efficiency.",
        id: "Buck converter sinkron 3A yang dirancang dan disimulasikan di LTspice, lalu dibuat layout PCB 2-layer di KiCad dengan efisiensi terukur sekitar 90%.",
      },
      image: "",
      tags: ["LTspice", "KiCad", "Power Electronics"],
      links: {
        code: "",
        demo: "",
        video: "",
      },
    },
    {
      title: { en: "Solar MPPT Charge Controller", id: "Charge Controller Surya MPPT" },
      year: "2023",
      description: {
        en: "A solar charge controller that uses the Perturb and Observe MPPT algorithm to maximize power from a 50W panel while charging a 12V battery.",
        id: "Charge controller tenaga surya yang memakai algoritma MPPT Perturb and Observe untuk memaksimalkan daya dari panel 50W saat mengisi baterai 12V.",
      },
      image: "",
      tags: ["STM32", "MPPT", "INA219", "Solar PV"],
      links: {
        code: "https://github.com/username/solar-mppt",
        demo: "",
        video: "",
      },
    },
  ],

  // ---------- PENGALAMAN ----------
  experience: [
    {
      role: { en: "Laboratory Assistant", id: "Asisten Laboratorium" },
      org: { en: "Basic Electronics Lab, Example University", id: "Lab Elektronika Dasar, Universitas Contoh" },
      period: { en: "Aug 2024 – Present", id: "Agu 2024 – Sekarang" },
      points: [
        {
          en: "Guide 40+ students per semester through practical sessions on diodes, transistors, and op-amps.",
          id: "Membimbing 40+ mahasiswa per semester dalam praktikum dioda, transistor, dan op-amp.",
        },
        {
          en: "Prepare lab modules and grade practical reports.",
          id: "Menyusun modul praktikum dan menilai laporan praktikum.",
        },
      ],
    },
    {
      role: { en: "Electrical Engineering Intern", id: "Magang Teknik Elektro" },
      org: "PT Example Energy Indonesia",
      period: { en: "Jun 2024 – Aug 2024", id: "Jun 2024 – Agu 2024" },
      points: [
        {
          en: "Assisted in preventive maintenance of low-voltage panels and documented inspection results.",
          id: "Membantu perawatan preventif panel tegangan rendah dan mendokumentasikan hasil inspeksi.",
        },
        {
          en: "Built a simple data logger to record transformer temperature.",
          id: "Membuat data logger sederhana untuk mencatat suhu transformator.",
        },
      ],
    },
    {
      role: { en: "Hardware Division Member", id: "Anggota Divisi Hardware" },
      org: { en: "University Robotics Club", id: "UKM Robotika Kampus" },
      period: "2023 – 2024",
      points: [
        {
          en: "Designed motor driver and power distribution boards for competition robots.",
          id: "Merancang board driver motor dan distribusi daya untuk robot lomba.",
        },
      ],
    },
  ],

  // ---------- PENDIDIKAN ----------
  education: [
    {
      school: { en: "Example University", id: "Universitas Contoh" },
      degree: {
        en: "Bachelor of Engineering in Electrical Engineering",
        id: "Sarjana Teknik Elektro",
      },
      period: { en: "2022 – Present", id: "2022 – Sekarang" },
      note: {
        en: "GPA 3.65 / 4.00 · Focus: Embedded Systems & Power Electronics",
        id: "IPK 3,65 / 4,00 · Peminatan: Sistem Embedded & Elektronika Daya",
      },
    },
  ],

  // ---------- SERTIFIKASI ----------
  certifications: [
    {
      name: "Internet of Things Fundamentals",
      issuer: "Example Academy",
      year: "2025",
      url: "", // link ke sertifikat (opsional)
    },
    {
      name: "PCB Design with KiCad",
      issuer: "Example Online Course",
      year: "2024",
      url: "",
    },
    {
      name: { en: "Basic Electrical Safety", id: "K3 Listrik Dasar" },
      issuer: "Example Training Center",
      year: "2024",
      url: "",
    },
  ],
}

// =====================================================================
// TEKS TAMPILAN (judul bagian, tombol, dll.) — jarang perlu diubah
// =====================================================================

const UI = {
  nav: {
    about: { en: "About", id: "Tentang" },
    skills: { en: "Skills", id: "Keahlian" },
    projects: { en: "Projects", id: "Proyek" },
    experience: { en: "Experience", id: "Pengalaman" },
    education: { en: "Education", id: "Pendidikan" },
    contact: { en: "Contact", id: "Kontak" },
  },
  sections: {
    about: { en: "A little about who I am and what drives me.", id: "Sedikit tentang siapa saya dan apa yang memotivasi saya." },
    skills: { en: "Tools and technologies I work with.", id: "Alat dan teknologi yang saya kuasai." },
    projects: { en: "Selected hardware and embedded projects I have built.", id: "Beberapa proyek hardware dan embedded yang pernah saya buat." },
    experience: { en: "Where I have learned and contributed.", id: "Tempat saya belajar dan berkontribusi." },
    education: { en: "My academic background and certifications.", id: "Latar belakang akademik dan sertifikasi saya." },
    certifications: { en: "Certifications", id: "Sertifikasi" },
    contact: { en: "Have a project, an opportunity, or just want to say hi? My inbox is open.", id: "Punya proyek, peluang kerja, atau sekadar ingin menyapa? Silakan hubungi saya." },
  },
  hero: {
    greeting: { en: "Hi, my name is", id: "Halo, nama saya" },
    viewProjects: { en: "View Projects", id: "Lihat Proyek" },
    downloadCv: { en: "Download CV", id: "Unduh CV" },
    contactMe: { en: "Contact Me", id: "Hubungi Saya" },
  },
  projects: {
    code: { en: "Code", id: "Kode" },
    demo: { en: "Demo", id: "Demo" },
    video: { en: "Video", id: "Video" },
  },
  contact: {
    sendEmail: { en: "Send an Email", id: "Kirim Email" },
  },
  footer: {
    builtWith: { en: "Built with HTML & Tailwind CSS", id: "Dibuat dengan HTML & Tailwind CSS" },
  },
  aria: {
    toggleLang: { en: "Switch language", id: "Ganti bahasa" },
    toggleTheme: { en: "Toggle dark mode", id: "Ganti mode gelap" },
    toggleMenu: { en: "Toggle menu", id: "Buka/tutup menu" },
  },
}