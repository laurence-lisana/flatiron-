import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getTransactions();
  }, []);

  const getTransactions = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    fetch("http://localhost:3000/transactions", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setTransactions(result);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Search transactions={transactions} setTransactions={setTransactions}/>
      <AddTransactionForm 
      transactions={transactions}
      setTransactions={setTransactions}
      />
      <TransactionsList transactions={transactions} />
    </div>
  );
}

export default AccountContainer;
