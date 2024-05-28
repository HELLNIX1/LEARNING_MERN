/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let dic = {};
  for(const i of transactions)
  {
      if(!(i['category'] in dic))
      {
        dic[i["category"]] = 0;
      }
      dic[i['category']] = dic[i['category']] + i['price'];
      

  }
  
  let ans = [];
  for(const i in dic)
  {
    let a = {};
    a['category'] = i;
    a['totalSpent'] = dic[i];
    ans.push(a);
  }
  return ans;
}


module.exports = calculateTotalSpentByCategory;
