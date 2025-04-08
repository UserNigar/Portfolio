//1.Date obyektindən istifadə etməklə elə bir şərt yazın ki istifadəçi sayta daxil olanda daxil olduğu saata uyğun ona mesaj çıxarsın
console.log("Saata uygun mesajin consola cixarilmasi");
function showTime() {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 6 && hour < 12) {
        console.log("Sabahınız xeyir ");
    } else if (hour >= 12 && hour < 18) {
        console.log("Günortanız xeyir ");
    } else if (hour >= 18 && hour < 22) {
        console.log("Axşamınız xeyir ");
    } else {
        console.log("Gecəniz xeyrə qalsın ");
    }
}
showTime();
console.log("-----------------");

/*Object Destructing istifadə edərək employee 
 obyektindən name, department və contact (email, phone, 
 emergencyContact sahələri daxil olmaqla) məlumatlarını əldə edin.
  Həmçinin emergencyContact-də name və relation məlumatı əldə edin.
 */

const employee = {
    name: "Farid Ali",
    department: "Engineering",
    contact: {
        email: "farid.ali@example.com",
        phone: "555-1234",
        emergencyContact: {
            name: "Far For",
            relation: "Spouse"
        }
    }
};

const {
    name,
    department,
    contact: {
        email,
        phone,
        emergencyContact: {
            relation
        }
    }
} = employee;
console.log("employee icindeki melumatlarin ekrana cixarilmasi");
console.log(`Name;${name}\nDepartment:${department}\nEmail:${email}\nPhone:${phone}\nEmergencyContact:${relation}\nEmergencyName:${employee.contact.emergencyContact.name}`);
console.log("-----------------");



//3.Bu API-dən alınan məlumatları təmsil edir
const apiResponse = [
    {
      id: 1,
      title: "JavaScript əsasları",
      author: "Səid Məmmədov",
      stats: [2500, 150, 30] //[oxunma, bəyənmə, şərhlər]
    },
    {
      id: 2,
      title: "Array Destructuring",
      author: "Leyla Əliyeva",
      stats: [1800, 220, 45]
    },
    {
      id: 3,
      title: "Müasir JavaScript",
      author: "Tural Həsənli",
      stats: [3200, 380, 70]
    }
  ];

  //meqale 0xunub consola yazdirilir
  console.log("1. İkinci məqaləni oxuyub consola yazdır");
  const { title, author, stats } = apiResponse[1];
  const [oxunma, beyenme, serh] = stats;
  console.log(`Title: ${title}\nAuthor: ${author}\nOxunma: ${oxunma}, Bəyənmə: ${beyenme}, Şərh: ${serh}`);
  console.log("-----------------");





  //4.Bu tapşırıqda hər iki operatoru birlikdə istifadə edin
  function renderUserProfile(userData) {
    const username = userData?.user?.username ?? "Qonaq";
    const avatar = userData?.user?.profile?.avatar ?? "/default-avatar.png";
    const bio = userData?.user?.profile?.bio ?? "Məlumat yoxdur";
    const email = userData?.user?.contact?.email ?? "təyin edilməyib";
    const premium = userData?.user?.account?.premium ?? false;
  
    return {
      username,
      avatar,
      bio,
      email,
      premium
    };
  }
console.log(" ?. (optional chaining) və ?? (nullish coalescing operatoru) ");

console.log(renderUserProfile({
  user: {
    username: "tahir2023",
    profile: {
      avatar: "/users/tahir.jpg",
      bio: "JavaScript developer",
    },
    contact: {
      email: "tahir@example.com"
    },
    account: {
      premium: true
    }
  }
}));

console.log(renderUserProfile({
  user: {
    username: "aynur",
    profile: {
      bio: ""
    },
    contact: {}
  }
}));

console.log(renderUserProfile({
  user: {
    username: null
  }
}));

console.log(renderUserProfile({}));