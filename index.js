//       it("has a 'newHeader' variable that points to node 'h1#victory' with \"YOUR-NAME is the champion\" inside", () => {
//         expect(newHeader.innerHTML, "Make sure you create an <h1> with id 'victory' with a sweet message in it").to.include("is the champion");
//       });
  
//     });
//   })

const main = document.getElementById('main');
main.remove();

const newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');

newHeader.textContent = 'francesca is the champion';
console.log(newHeader.textContent);