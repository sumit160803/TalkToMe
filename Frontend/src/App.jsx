import Home from './Pages/Home';

function App() {
  const router = createBrowserRouter([
    {
      element:<MainLayout/>,
      children: [
        {
          path:"/",
          element:<Home/>
        }
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
