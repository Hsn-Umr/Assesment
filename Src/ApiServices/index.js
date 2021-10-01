// let BASE_URL = 'https://dummyapi.io/data/v1';
// let endpoint = {
  
// };
// class Services {
//   getURL = key => {
//     let Url = BASE_URL + key;
//     console.log('url', Url);
//     return Url;
//   };

//   getPosts = ( callback) => {
//     let appId = '615743fbbffd33af501c805d'
//     console.log('get tasks ', appId);

//     fetch(this.getURL(), {
//         method: 'GET',
//         headers: {
//             'app-id': appId
//         }
//     })
//         .then(response => response.text())
//         .then(result => callback({ isSuccess: true, response: JSON.parse(result) }))
//         .catch(error => callback({ isSuccess: false, response: error }));
// };
  
  
// }
// const ApiSerivces = new Services();
// export default ApiSerivces;


import axios from "axios";

let appId = '615743fbbffd33af501c805d'
console.log('get tasks ', appId);

export const getPosts = async () => {
  const { data } = await axios.get('https://dummyapi.io/data/v1/post?limit=10', {
    headers: {
      'app-id': appId
  }
  })
  return data;
};
