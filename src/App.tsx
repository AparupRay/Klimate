import "./App.css";
// import { Button } from "./components/ui/button";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "./components/Layout";
import { ThemeProvider } from "./context/theme-provider";
import WeatherDashboard from "./pages/weather-dashboard";
import CityPage from "./pages/city-page";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ThemeProvider defaultTheme="dark">
          <Layout>
            <Routes>
              <Route path="/" element={<WeatherDashboard />} />
              <Route path="/city/:cityName" element={<CityPage />} />
            </Routes>
          </Layout>
        </ThemeProvider>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
//38:43
//https://www.youtube.com/watch?v=BCp_5PoKrvI

//While most traditional state management libraries are great for working with client state,
// they are not so great at working with async or server state.

// Caching... (possibly the hardest thing to do in programming)
// Deduping multiple requests for the same data into a single request
// Updating "out of date" data in the background
// Knowing when data is "out of date"
// Reflecting updates to data as quickly as possible
// Performance optimizations like pagination and lazy loading data
// Managing memory and garbage collection of server state
// Memoizing query results with structural sharing
