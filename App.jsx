import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeroUIProvider } from "@heroui/react";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import AddExpense from "./pages/Addexpense";
import Expenses from "./pages/Expenses";
import ExpenseDetail from "./pages/Expensedetail";
import Budgets from "./pages/Budgets";
import BudgetDetail from "./pages/Budgetdetail";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

function App() {
  return (
    <HeroUIProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/add-expense" element={<AddExpense />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/expenses/detail" element={<ExpenseDetail />} />
            <Route path="/budgets" element={<Budgets />} />
            <Route path="/budgets/detail" element={<BudgetDetail />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </HeroUIProvider>
  );
}

export default App;
