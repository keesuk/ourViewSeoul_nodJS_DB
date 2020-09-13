const inkjet = ('inkjet');
const fs = require('fs');

inkjet.decode(fs.readFinleSync(''), function(err, decoded) {
    // ...
  });