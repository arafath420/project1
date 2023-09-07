const blood_group = "ab+";

const gett_reasult = User.filter((data) => data.bloodGroup === blood_group);

const get_data = gett_reasult.map((item) => {
  console.log(`name: ${item.name},
blood group: ${item.bloodGroup}
last donate: ${day_count(item.last_donate)}`);
});
