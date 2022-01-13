function Contact(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.address=[]
  }

  function Address(street, city, county) {
    this.street = street;
    this.city = city;
    this.county = county;
  }

  var jane = new Contact("Jane", "Njeri");
  var home = new Address("671 Ngong Road", "Nakuru", "Nairobi");

  alert(Object.values(jane))
  alert(Object.values(home))
  jane.address.push(home);
  alert(Object.values(jane))