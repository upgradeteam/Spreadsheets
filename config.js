/* ============================================================
   UPgrade sayti — sozlamalar (settings)
   ------------------------------------------------------------
   Firebase'ni sozlagandan keyin shu fayldagi ikki joyni to'ldiring:
   1) FIREBASE — Firebase console'dan nusxalangan "firebaseConfig"
   2) ADMIN_EMAIL — Firebase Authentication'da yaratgan admin email (tayyor qo'yilgan)
   FIREBASE bo'sh qolsa, sayt DEMO rejimda ishlaydi (ma'lumotlar faqat
   shu brauzerda saqlanadi, admin kodi: 1234).
   ============================================================ */

window.UPGRADE_CONFIG = {
  FIREBASE: {
    apiKey: "AIzaSyBqV7cAAA-NKVnZ_DRONETI-uKxhAlhMd4",
    authDomain: "upgrade-udea.firebaseapp.com",
    projectId: "upgrade-udea",
    storageBucket: "upgrade-udea.firebasestorage.app",
    messagingSenderId: "921558198476",
    appId: "1:921558198476:web:ab2e0bf663590f4b96ba69"
  },
  ADMIN_EMAIL: "admin@upgrade-udea.uz",   // firestore.rules dagi bilan bir xil bo'lsin
  POINTS_DEFAULT: 40        // har bir tashrif uchun standart ball
};
