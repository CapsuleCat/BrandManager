/**
 * Brand Create
 */
Meteor.methods({
  "Brand.Create": function (brandName) {
    if (brandName.trim() === '') {
      throw new Meteor.Error('bad-brand-name', 'The Brand Name cannot be blank');
    }

    Brands.insert({
      brandName: brandName
    });
  }
});
