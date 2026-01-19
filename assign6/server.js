const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Landing Page</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <nav class="flex align-center justify-between px-6 py-4 bg-sky-500">
        <div>
            <h1 class="text-2xl font-bold">Landing Page</h1>
        </div>
        <div class="flex gap-6 text-lg font-semibold">
            <a class="cursor-pointer hover:border-b-2 duration-300" href="/home">HOME</a>
            <a class="cursor-pointer hover:border-b-2 duration-300" href="/about">ABOUT</a>
            <a class="cursor-pointer hover:border-b-2 duration-300" href="/contact">CONTACT</a>
        </div>
    </nav>

     <section class="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
    
    <div class="flex-1">
      <h2 class="text-4xl font-bold leading-tight mb-4 text-violet-600">
        Landing Page
      </h2>
      <p class="text-gray-600 mb-6">
        A landing page fetch from the server using http module. Server consist landing page, about us, contact us and 404 Not found page.   
      </p>

    </div>
    <div class="flex-1">
      <img
        src="https://illustrations.popsy.co/gray/work-from-home.svg"
        alt="Hero Illustration"
        class="w-full max-w-md mx-auto"
      />
    </div>
  </section>

  <section>
    <div class="flex flex-col gap-8 lg:gap-0 lg:flex-row justify-evenly items-center py-8 bg-sky-500 mt-5">
      <div class="text-5xl font-semibold">Total 4 Pages</div>
      <div class="flex justify-between items-center gap-7">
        <div class="text-xl font-bold border-r-2 pr-4 border-gray-400"> Landing</div>
        <div class="text-xl font-bold border-r-2 pr-4 border-gray-400"> Home</div>
        <div class="text-xl font-bold border-r-2 pr-4 border-gray-400">About</div>
        <div class="text-xl font-bold">Contact</div>
      </div>
     </div>
  </section>

  <footer class="flex gap-5 items-center justify-between px-5 py-4">
          <div>
            <h2 class="text-2xl font-bold mb-5">Landing Page</h2>
            <p class="text-xl">About us</p>
            <p class="text-gray-500">This is the landing page created on the server side and res back from the server side</p>
          </div>
          <div class="flex flex-col text-gray-500">
            <h3 class="text-xl mb-2 text-gray-800">Important Links</h3>
            <a href="#">About us</a>
            <a href="#">Contact us</a>
          </div>
          <div class="text-gray-500">
            <h3 class="text-xl text-gray-800">Contact</h3>
            <p>mail@site.com</p>
            <p>+91 00000000</p>
          </div>
          
         </footer>
</body>
</html>
`);
    res.statusCode = 201;
    return res.end();
  } else if (req.url === "/home") {
    res.write(`
        <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Page</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <nav class="flex align-center justify-between px-6 py-4 bg-sky-500">
        <div>
            <h1 class="text-2xl font-bold">Home Page</h1>
        </div>
        <div class="flex gap-6 text-lg font-semibold">
            <a class="cursor-pointer hover:border-b-2 duration-300" href="/home">HOME</a>
            <a class="cursor-pointer hover:border-b-2 duration-300" href="/about">ABOUT</a>
            <a class="cursor-pointer hover:border-b-2 duration-300" href="/contact">CONTACT</a>
        </div>
    </nav>

     <section class="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
    
    <div class="flex-1">
      <h2 class="text-4xl font-bold leading-tight mb-4 text-violet-600">
        Home Page
      </h2>
      <p class="text-gray-600 mb-6">
        Home page fetch from the server using http module. Server consist landing page, about us, contact us and 404 Not found page.   
      </p>

    </div>
    <div class="flex-1">
      <img
        src="https://illustrations.popsy.co/gray/work-from-home.svg"
        
        class="w-full max-w-md mx-auto"
      />
    </div>
  </section>

  <section>
    <div class="flex flex-col gap-8 lg:gap-0 lg:flex-row justify-evenly items-center py-8 bg-sky-500 mt-5">
      <div class="text-5xl font-semibold">Total 4 Pages</div>
      <div class="flex justify-between items-center gap-7">
        <div class="text-xl font-bold border-r-2 pr-4 border-gray-400"> Landing</div>
        <div class="text-xl font-bold border-r-2 pr-4 border-gray-400"> Home</div>
        <div class="text-xl font-bold border-r-2 pr-4 border-gray-400">About</div>
        <div class="text-xl font-bold border-r-2 pr-4 border-gray-400">Contact</div>
        <div class="text-xl font-bold">404</div>
      </div>
     </div>
  </section>

  <footer class="flex gap-5 items-center justify-between px-5 py-4">
          <div>
            
            <p class="text-xl">Home Page</p>
            <p class="text-gray-500">This is home page fetch from server created on the server side and res back from the server side</p>
          </div>
          <div class="flex flex-col text-gray-500">
            <h3 class="text-xl mb-2 text-gray-800">Important Links</h3>
            <a href="#">About us</a>
            <a href="#">Contact us</a>
          </div>
          <div class="text-gray-500">
            <h3 class="text-xl text-gray-800">Contact</h3>
            <p>mail@site.com</p>
            <p>+91 00000000</p>
          </div>
          
         </footer>
</body>
</html>
`);
    res.statusCode = 201;
    return res.end();
  } else if (req.url === "/about") {
    res.write(`
        <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Page</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <nav class="flex align-center justify-between px-6 py-4 bg-sky-500">
        <div>
            <h1 class="text-2xl font-bold">About Page</h1>
        </div>
        <div class="flex gap-6 text-lg font-semibold">
            <a class="cursor-pointer hover:border-b-2 duration-300" href="/home">HOME</a>
            <a class="cursor-pointer hover:border-b-2 duration-300" href="/about">ABOUT</a>
            <a class="cursor-pointer hover:border-b-2 duration-300" href="/contact">CONTACT</a>
        </div>
    </nav>

     <section class="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
    
    <div class="flex-1">
      <h2 class="text-4xl font-bold leading-tight mb-4 text-violet-600">
        About Page
      </h2>
      <p class="text-gray-600 mb-6">
        A About us page fetch from the server using http module. Server consist landing page, about us, contact us and 404 Not found page.   
      </p>

    </div>
    <div class="flex-1">
      <img
        src="https://media.istockphoto.com/id/523262976/photo/about-us-concept-with-alphabet-blocks.jpg?s=2048x2048&w=is&k=20&c=HSFRm68qEWf75b4aXEOpELs-lwXCGiXhQSp78akBW5c="
        
        class="w-full max-w-md mx-auto"
      />
    </div>
  </section>

  <section>
    <div class="flex flex-col gap-8 lg:gap-0 lg:flex-row justify-evenly items-center py-8 bg-sky-500 mt-5">
      <div class="text-5xl font-semibold">Total 4 Pages</div>
      <div class="flex justify-between items-center gap-7">
        <div class="text-xl font-bold border-r-2 pr-4 border-gray-400"> Landing</div>
        <div class="text-xl font-bold border-r-2 pr-4 border-gray-400"> Home</div>
        <div class="text-xl font-bold border-r-2 pr-4 border-gray-400">About</div>
        <div class="text-xl font-bold">Contact</div>
      </div>
     </div>
  </section>

  <footer class="flex gap-5 items-center justify-between px-5 py-4">
          <div>
            
            <p class="text-xl">About us</p>
            <p class="text-gray-500">This is the home page created on the server side and res back from the server side</p>
          </div>
          <div class="flex flex-col text-gray-500">
            <h3 class="text-xl mb-2 text-gray-800">Important Links</h3>
            <a href="#">About us</a>
            <a href="#">Contact us</a>
          </div>
          <div class="text-gray-500">
            <h3 class="text-xl text-gray-800">Contact</h3>
            <p>mail@site.com</p>
            <p>+91 00000000</p>
          </div>
          
         </footer>
</body>
</html>
`);
    res.statusCode = 201;
    return res.end();
  } else if (req.url === "/contact") {
    res.write(`
        
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Page</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <nav class="flex align-center justify-between px-6 py-4 bg-sky-500">
        <div>
            <h1 class="text-2xl font-bold">Contact Page</h1>
        </div>
        <div class="flex gap-6 text-lg font-semibold">
            <a class="cursor-pointer hover:border-b-2 duration-300" href="/home">HOME</a>
            <a class="cursor-pointer hover:border-b-2 duration-300" href="/about">ABOUT</a>
            <a class="cursor-pointer hover:border-b-2 duration-300" href="/contact">CONTACT</a>
        </div>
    </nav>

     <section class="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
    
    <div class="flex-1">
      <h2 class="text-4xl font-bold leading-tight mb-4 text-violet-600">
        Contact Page
      </h2>
      <p class="text-gray-600 mb-6">
        A Contact page fetch from the server using http module. Server consist landing page, about us, contact us and 404 Not found page.   
      </p>

    </div>
    <div class="flex-1">
      <img
        src="https://media.istockphoto.com/id/1091858450/photo/contact-us-sign-on-a-wooden-desk.jpg?s=2048x2048&w=is&k=20&c=lGivkcCOZD-k50DK3QbcSLWBiNL-q-gGxT3D3qBUtiE="
        
        class="w-full max-w-md mx-auto"
      />
    </div>
  </section>

  <section>
    <div class="flex flex-col gap-8 lg:gap-0 lg:flex-row justify-evenly items-center py-8 bg-sky-500 mt-5">
      <div class="text-5xl font-semibold">Total 4 Pages</div>
      <div class="flex justify-between items-center gap-7">
        <div class="text-xl font-bold border-r-2 pr-4 border-gray-400"> Landing</div>
        <div class="text-xl font-bold border-r-2 pr-4 border-gray-400"> Home</div>
        <div class="text-xl font-bold border-r-2 pr-4 border-gray-400">About</div>
        <div class="text-xl font-bold">Contact</div>
      </div>
     </div>
  </section>

  <footer class="flex gap-5 items-center justify-between px-5 py-4">
          <div>
            <h2 class="text-2xl font-bold mb-5">Home page</h2>
            <p class="text-xl">About us</p>
            <p class="text-gray-500">This is the home page created on the server side and res back from the server side</p>
          </div>
          <div class="flex flex-col text-gray-500">
            <h3 class="text-xl mb-2 text-gray-800">Important Links</h3>
            <a href="#">About us</a>
            <a href="#">Contact us</a>
          </div>
          <div class="text-gray-500">
            <h3 class="text-xl text-gray-800">Contact</h3>
            <p>mail@site.com</p>
            <p>+91 00000000</p>
          </div>
          
         </footer>
</body>
</html>
`);
    res.statusCode = 201;
    return res.end();
  } else {
    res.write(`
        <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Not Found</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <nav class="flex align-center justify-between px-6 py-4 bg-sky-500">
        <div>
            <h1 class="text-2xl font-bold">404 Page</h1>
        </div>
        <div class="flex gap-6 text-lg font-semibold">
            <a class="cursor-pointer hover:border-b-2 duration-300" href="/home">HOME</a>
            <a class="cursor-pointer hover:border-b-2 duration-300" href="/about">ABOUT</a>
            <a class="cursor-pointer hover:border-b-2 duration-300" href="/contact">CONTACT</a>
        </div>
    </nav>

     <section class="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
    
    <div class="flex-1">
      <h2 class="text-4xl font-bold leading-tight mb-4 text-violet-600">
        Page Not Found
      </h2>
      <p class="text-gray-600 mb-6">
        404 Page not found fetch from the server using http module. Server consist landing page, about us, contact us and 404 Not found page.   
      </p>

    </div>
    <div class="flex-1">
      <img
        src="https://media.istockphoto.com/id/1311367104/vector/404-page-not-found-banner-template.jpg?s=2048x2048&w=is&k=20&c=IZxHY_UrPNQaeeKQDWqSd_inaXxk41kqxgYbB1odUxE="
        
        class="w-full max-w-md mx-auto"
      />
    </div>
  </section>

  <section>
    <div class="flex flex-col gap-8 lg:gap-0 lg:flex-row justify-evenly items-center py-8 bg-sky-500 mt-5">
      <div class="text-5xl font-semibold">Total 4 Pages</div>
      <div class="flex justify-between items-center gap-7">
        <div class="text-xl font-bold border-r-2 pr-4 border-gray-400"> Landing</div>
        <div class="text-xl font-bold border-r-2 pr-4 border-gray-400"> Home</div>
        <div class="text-xl font-bold border-r-2 pr-4 border-gray-400">About</div>
        <div class="text-xl font-bold border-r-2 pr-4 border-gray-400">Contact</div>
        <div class="text-xl font-bold">404</div>
      </div>
     </div>
  </section>

  <footer class="flex gap-5 items-center justify-between px-5 py-4">
          <div>
            
            <p class="text-xl">404 Page</p>
            <p class="text-gray-500">This is the page not found page created on the server side and res back from the server side</p>
          </div>
          <div class="flex flex-col text-gray-500">
            <h3 class="text-xl mb-2 text-gray-800">Important Links</h3>
            <a href="#">About us</a>
            <a href="#">Contact us</a>
          </div>
          <div class="text-gray-500">
            <h3 class="text-xl text-gray-800">Contact</h3>
            <p>mail@site.com</p>
            <p>+91 00000000</p>
          </div>
          
         </footer>
</body>
</html>
`);
    res.statusCode = 404;
    return res.end();
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
   