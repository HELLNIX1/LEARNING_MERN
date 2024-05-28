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
  
  // Example usage:
  const transactions = [
    {
      id: 1,
      timestamp: 1656076800000,
      price: 10,
      category: 'Food',
      itemName: 'Pizza',
    },
    {
      id: 2,
      timestamp: 1656076800000,
      price: 20,
      category: 'Clothing',
      itemName: 'T-shirt',
    },
    {
      id: 3,
      timestamp: 1656076800000,
      price: 15,
      category: 'Food',
      itemName: 'Burger',
    }
  ];
  
  const result = calculateTotalSpentByCategory(transactions);
  console.log(result);
  