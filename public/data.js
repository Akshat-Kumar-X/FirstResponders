const searchData = [
    {
      name: 'John Doe',
      occupation: 'Cardiologist',
      experience: '15+ years',
      email: 'johndoe@example.com',
      district: 'Central District',
      imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      name: 'Jane Smith',
      occupation: 'Pediatrician',
      experience: '12+ years',
      email: 'janesmith@example.com',
      district: 'Harbour District',
      imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      name: 'Michael Johnson',
      occupation: 'Dermatologist',
      experience: '20+ years',
      email: 'michaeljohnson@example.com',
      district: 'Kowloon City District',
      imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      name: 'Emily Davis',
      occupation: 'Neurologist',
      experience: '18+ years',
      email: 'emilydavis@example.com',
      district: 'Sha Tin District',
      imageUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
      name: 'William Wilson',
      occupation: 'Oncologist',
      experience: '22+ years',
      email: 'williamwilson@example.com',
      district: 'Wan Chai District',
      imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      name: 'Jessica Brown',
      occupation: 'Psychiatrist',
      experience: '17+ years',
      email: 'jessicabrown@example.com',
      district: 'Yau Tsim Mong District',
      imageUrl: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: 'Daniel Martinez',
      occupation: 'Orthopedic Surgeon',
      experience: '19+ years',
      email: 'danielmartinez@example.com',
      district: 'Kwun Tong District',
      imageUrl: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: 'Sophia Garcia',
      occupation: 'Radiologist',
      experience: '14+ years',
      email: 'sophiagarcia@example.com',
      district: 'Tsuen Wan District',
      imageUrl: 'https://randomuser.me/api/portraits/women/8.jpg',
    },
    {
      name: 'Alexander Rodriguez',
      occupation: 'Gynecologist',
      experience: '16+ years',
      email: 'alexanderrodriguez@example.com',
      district: 'Tuen Mun District',
      imageUrl: 'https://randomuser.me/api/portraits/men/9.jpg',
    },
    {
      name: 'Olivia Martinez',
      occupation: 'ENT Specialist',
      experience: '21+ years',
      email: 'oliviamartinez@example.com',
      district: 'Tai Po District',
      imageUrl: 'https://randomuser.me/api/portraits/women/10.jpg',
    },
    {
      name: 'James Wilson',
      occupation: 'Cardiologist',
      experience: '18+ years',
      email: 'jameswilson@example.com',
      district: 'Eastern District',
      imageUrl: 'https://randomuser.me/api/portraits/men/11.jpg',
    },
    {
      name: 'Ava Johnson',
      occupation: 'Pediatrician',
      experience: '13+ years',
      email: 'avajohnson@example.com',
      district: 'Southern District',
      imageUrl: 'https://randomuser.me/api/portraits/women/12.jpg',
    },
    {
      name: 'Noah Smith',
      occupation: 'Dermatologist',
      experience: '19+ years',
      email: 'noahsmith@example.com',
      district: 'Islands District',
      imageUrl: 'https://randomuser.me/api/portraits/men/13.jpg',
    },
    {
      name: 'Emma Davis',
      occupation: 'Neurologist',
      experience: '16+ years',
      email: 'emmadavis@example.com',
      district: 'North District',
      imageUrl: 'https://randomuser.me/api/portraits/women/14.jpg',
    },
    {
      name: 'Liam Wilson',
      occupation: 'Oncologist',
      experience: '23+ years',
      email: 'liamwilson@example.com',
      district: 'Sai Kung District',
      imageUrl: 'https://randomuser.me/api/portraits/men/15.jpg',
    },
    {
      name: 'Olivia Brown',
      occupation: 'Psychiatrist',
      experience: '18+ years',
      email: 'oliviabrown@example.com',
      district: 'Central and Western District',
      imageUrl: 'https://randomuser.me/api/portraits/women/16.jpg',
    },
    {
      name: 'Ethan Martinez',
      occupation: 'Orthopedic Surgeon',
      experience: '20+ years',
      email: 'ethanmartinez@example.com',
      district: 'Wong Tai Sin District',
      imageUrl: 'https://randomuser.me/api/portraits/men/17.jpg',
    },
    {
      name: 'Amelia Garcia',
      occupation: 'Radiologist',
      experience: '15+ years',
      email: 'ameliagarcia@example.com',
      district: 'Yuen Long District',
      imageUrl: 'https://randomuser.me/api/portraits/women/18.jpg',
    },
    {
      name: 'Logan Rodriguez',
      occupation: 'Gynecologist',
      experience: '17+ years',
      email: 'loganrodriguez@example.com',
      district: 'Sham Shui Po District',
      imageUrl: 'https://randomuser.me/api/portraits/men/19.jpg',
    },
    {
      name: 'Ava Martinez',
      occupation: 'ENT Specialist',
      experience: '22+ years',
      email: 'avamartinez@example.com',
      district: 'Kwai Tsing District',
      imageUrl: 'https://randomuser.me/api/portraits/women/20.jpg',
    },
    {
      name: 'William Wilson',
      occupation: 'Cardiologist',
      experience: '19+ years',
      email: 'williamwilson@example.com',
      district: 'Wong Tai Sin District',
      imageUrl: 'https://randomuser.me/api/portraits/men/21.jpg',
    },
    {
      name: 'Emma Johnson',
      occupation: 'Pediatrician',
      experience: '14+ years',
      email: 'emmajohnson@example.com',
      district: 'Sai Kung District',
      imageUrl: 'https://randomuser.me/api/portraits/women/22.jpg',
    },
    {
      name: 'Liam Smith',
      occupation: 'Dermatologist',
      experience: '20+ years',
      email: 'liamsmith@example.com',
      district: 'North District',
      imageUrl: 'https://randomuser.me/api/portraits/men/23.jpg',
    },
    {
      name: 'Olivia Davis',
      occupation: 'Neurologist',
      experience: '17+ years',
      email: 'oliviadavis@example.com',
      district: 'Tuen Mun District',
      imageUrl: 'https://randomuser.me/api/portraits/women/24.jpg',
    },
    {
      name: 'Noah Wilson',
      occupation: 'Oncologist',
      experience: '24+ years',
      email: 'noahwilson@example.com',
      district: 'Tsuen Wan District',
      imageUrl: 'https://randomuser.me/api/portraits/men/25.jpg',
    },
    {
      name: 'Sophia Brown',
      occupation: 'Psychiatrist',
      experience: '19+ years',
      email: 'sophiabrown@example.com',
      district: 'Tseung Kwan O District',
      imageUrl: 'https://randomuser.me/api/portraits/women/26.jpg',
    },
    {
      name: 'Alexander Martinez',
      occupation: 'Orthopedic Surgeon',
      experience: '21+ years',
      email: 'alexandermartinez@example.com',
      district: 'Yuen Long District',
      imageUrl: 'https://randomuser.me/api/portraits/men/27.jpg',
    },
    {
      name: 'Olivia Garcia',
      occupation: 'Radiologist',
      experience: '16+ years',
      email: 'oliviagarcia@example.com',
      district: 'Sha Tin District',
      imageUrl: 'https://randomuser.me/api/portraits/women/28.jpg',
    },
    {
      name: 'James Rodriguez',
      occupation: 'Gynecologist',
      experience: '18+ years',
      email: 'jamesrodriguez@example.com',
      district: 'Kowloon City District',
      imageUrl: 'https://randomuser.me/api/portraits/men/29.jpg',
    },
    {
      name: 'Sophia Martinez',
      occupation: 'ENT Specialist',
      experience: '23+ years',
      email: 'sophiamartinez@example.com',
      district: 'Yau Tsim Mong District',
      imageUrl: 'https://randomuser.me/api/portraits/women/30.jpg',
    },
    // Add more records as needed
  ];
  
  export default searchData;
