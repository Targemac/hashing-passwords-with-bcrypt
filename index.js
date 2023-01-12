const bcrypt = require("bcrypt");
const pass = "s0//P4$$w0rD";

(async () => {
  const hashedPass = bcrypt.hash(pass, 10);

  bcrypt.compare(
    pass,
    hashedPass,
    await function (err, result) {
      if (err) console.log("error");
      result == true ? console.log("matched") : console.log("not matched");
    }
  );
})();
