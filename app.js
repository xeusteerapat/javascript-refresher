const person = {
  firstname: "Teerapat",
  lastname: "Prommarak",
  nickname: "X",
  getFullname() {
    return `${this.firstname} ${this.lastname}`;
  },
  getBio() {
    console.log(
      `${this.getFullname()} is a person who is studying in web development`
    );
  },
  laugh() {
    setInterval(() => {
      console.log(`${this.firstname} says HAHAHAHAHA`);
    }, 3000);
  }
};
