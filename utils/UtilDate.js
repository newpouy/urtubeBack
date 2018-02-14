// Object.defineProperty(Date.prototype, 'YYYYMMDDHHMMSS', {
//     value: function() {
//         function pad2(n) {  // always returns a string
//             return (n < 10 ? '0' : '') + n;
//         }
//
//         return this.getFullYear() +
//                pad2(this.getMonth() + 1) +
//                pad2(this.getDate()) +
//                pad2(this.getHours()) +
//                pad2(this.getMinutes()) +
//                pad2(this.getSeconds());
//     }
// });
var UtilDate = {
  makeYYYYmmDDhhMM: function(){
    return this.getFullYear() +
           pad2(this.getMonth() + 1) +
           pad2(this.getDate()) +
           pad2(this.getHours()) +
           pad2(this.getMinutes()) +
           pad2(this.getSeconds());
    return true;
  },
  pad2: function(n) {  // always returns a string
      return (n < 10 ? '0' : '') + n;
  }
}


module.exports = UtilDate;
