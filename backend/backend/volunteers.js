// مصفوفة لتخزين المتطوعين
const volunteers = [];

// دالة إضافة متطوع جديد
function addVolunteer(volunteer) {
  volunteers.push(volunteer);
  return volunteers;
}

// دالة عرض كل المتطوعين
function getVolunteers() {
  return volunteers;
}

module.exports = {
  addVolunteer,
  getVolunteers
};
