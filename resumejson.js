const resume={
    "_id": "p1",
    "fullname": "Rohit Singh",
    "about me": " I am a proficient Java and Kotlin Android developer who values creativity and innovation over repetitive tasks. I believe in constantly upgrading my skills and have been working with blockchain technology lately",
    "dob": "29/03/2005",
    "email": "ytrohit2004@gmail.com",
    "contactnumber": [
      {
       "type": "mobile",
       "lable": "Primary contact no",
       "value": "+9198xxxxxx89"
      },
      {
        "type": "mobile",
        "lable": "Another contact no",
        "value": "+9198xxxxxx89"
      },
      {
        "type": "mobile",
        "lable": "WhatsApp no",
        "value": "+9198xxxxxx89"
      }
    ],
    "qualifications": [
      {
          "School": "KV2 Agra Cantt Agra",
          "University": "GLA University Mathura",
          "year of passing": "2026"
  
      }
    ],
  
    "skills": ["Java", "Kotlin","Rest API","Firebase","RoomDatabase","jetpack compose"],
    "projects": [
      { 
          "College Help app": " Developed an application catering to a campus startup that facilitates the convenient rental supply of items",
          "I am aware": "Developed an application that empowers children to  advocate for their rights and stand against instances of molestation."
  }
     
    ]
  }
  console.log(resume);
  var qualifications= resume['qualifications']; // same
  var qualifications= resume.qualifications;    // same