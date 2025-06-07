import "./App.css";
// import { Button } from "./components/ui/button";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "./components/Layout";
import { ThemeProvider } from "./context/theme-provider";
import WeatherDashboard from "./pages/weather-dashboard";
import CityPage from "./pages/city-page";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, //5 minutes //The time in milliseconds after data is considered stale. If set to Infinity, the data will never be considered stale. If set to a function, the function will be executed with the query to compute a staleTime. Defaults to 0.
      gcTime: 10 * 60 * 1000, //10 minutes //The time in milliseconds that unused/inactive cache data remains in memory. When a query's cache becomes unused or inactive, that cache data will be garbage collected after this duration. When different garbage collection times are specified, the longest one will be used. Setting it to Infinity will disable garbage collection.
      retry: false, //If false, failed queries will not retry by default. If true, failed queries will retry infinitely., failureCount: num If set to an integer number, e.g. 3, failed queries will retry until the failed query count meets that number.
      refetchOnWindowFocus: false, //If set to true, the query will refetch on window focus if the data is stale. If set to false, the query will not refetch on window focus. If set to 'always', the query will always refetch on window focus. If set to a function, the function will be executed with the latest data and query to compute the value. Defaults to true.
    },
  },
});

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
//1:37:06
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

// Lucide React is a React implementation of the Lucide icon library, which provides a collection of beautiful and consistent SVG icons for React applications. It is a tree-shakable library, meaning only the icons you import are included in your final bundle, optimizing performance.
// Key Features
// - Lightweight & Tree-shakable – Only imports the icons you use.
// - Customizable – Supports props like size, color, and strokeWidth.
// - Dynamic Icon Loading – Allows dynamic icon rendering using DynamicIcon.
// - Supports Lucide Lab Icons – Additional icons beyond the main library.

// Tree-shakable refers to how JavaScript bundlers (like Webpack or Rollup) automatically remove unused code from the final bundle.
// In the case of Lucide React, it means that if you only import a few icons, your application won't load the entire icon set—just
// the ones you're actually using, which improves efficiency
// import { Camera } from 'lucide-react'; // Only 'Camera' icon gets included in the bundle so It will not increase the final bundle size.

//Stale Time -
// - Defines how long fetched data remains fresh before being marked as stale.
// - While data is fresh, it is read from the cache without triggering a network request.
// - Once data becomes stale, a background refetch may occur when the query is accessed.

//GC Time -
// - Determines how long inactive queries remain in the cache before being deleted.
// - If a query is not used for the specified gcTime, it is removed from memory
