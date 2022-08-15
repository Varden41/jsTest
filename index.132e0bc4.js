(async()=>{const o=[1,2,3].map((async o=>(await fetch(`https://jsonplaceholder.typicode.com/users/${o}`)).json())),s=await Promise.all(o);console.log(s)})();
//# sourceMappingURL=index.132e0bc4.js.map
