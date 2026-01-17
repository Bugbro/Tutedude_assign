const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(`
        <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Landing Page</title>

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 text-gray-800">

  <!-- Navbar -->
  <header class="bg-white shadow">
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <h1 class="text-xl font-bold text-violet-600">Landing Page</h1>
      <nav class="space-x-6 hidden md:block">
        <a href="/home" class="hover:text-violet-600">Home</a>
        <a href="/about" class="hover:text-violet-600">About</a>
        <a href="/contact" class="hover:text-violet-600">Contact</a>
      </nav>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
    
    <!-- Text -->
    <div class="flex-1">
      <h2 class="text-4xl font-bold leading-tight mb-4">
        Simple Landing Page <span class="text-violet-600">Using http Module</span>
      </h2>
      <p class="text-gray-600 mb-6">
        A landing page fetch from the server using http module. Server consist landing page, about us, contact us and 404 Not found page.   
      </p>

      <div class="flex gap-4">
        <button class="px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700">
          Get Started
        </button>
        <button class="px-6 py-3 border border-violet-600 text-violet-600 rounded-lg hover:bg-violet-50">
          Learn More
        </button>
      </div>
    </div>

    <!-- Image -->
    <div class="flex-1">
      <img
        src="https://illustrations.popsy.co/gray/work-from-home.svg"
        alt="Hero Illustration"
        class="w-full max-w-md mx-auto"
      />
    </div>

  </section>

  <!-- Features Section -->
  <section class="bg-white py-16">
    <div class="max-w-6xl mx-auto px-6">
      <h3 class="text-3xl font-bold text-center mb-12">Features</h3>

      <div class="grid md:grid-cols-3 gap-8">
        <div class="p-6 rounded-xl shadow-sm border">
          <h4 class="font-semibold text-lg mb-2"> Landing Page</h4>
          <p class="text-gray-600">
            The pages are created using tailwind css classes.
          </p>
        </div>

        <div class="p-6 rounded-xl shadow-sm border">
          <h4 class="font-semibold text-lg mb-2">About Us</h4>
          <p class="text-gray-600">
           Check out the about us page by click on above navbar
          </p>
        </div>

        <div class="p-6 rounded-xl shadow-sm border">
          <h4 class="font-semibold text-lg mb-2">Contact Us</h4>
          <p class="text-gray-600">
            Check the contact us page by click on the above Contact us link in Navbar.
          </p>
        </div>
      </div>
    </div>
  </section>


  <!-- Footer -->
  <footer class="bg-gray-900 text-gray-400 py-6">
    <div class="max-w-6xl mx-auto px-6 text-center">
      © 2026 All rights reserved.
    </div>
  </footer>

</body>
</html>
`);
    res.statusCode = 201;
    return res.end();
  } else if (req.url === "/home") {
    res.write(`
        <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Home Page</title>

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 text-gray-800">

  <!-- Navbar -->
  <header class="bg-white shadow">
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <h1 class="text-xl font-bold text-violet-600">Home Page</h1>
      <nav class="space-x-6 hidden md:block">
        <a href="/home" class="hover:text-violet-600">Home</a>
        <a href="/about" class="hover:text-violet-600">About</a>
        <a href="/contact" class="hover:text-violet-600">Contact</a>
      </nav>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
    
    <!-- Text -->
    <div class="flex-1">
      <h2 class="text-4xl font-bold leading-tight mb-4">
        Simple Home Page <span class="text-violet-600">Using http Module</span>
      </h2>
      <p class="text-gray-600 mb-6">
        Home page fetch from the server using http module. Server consist landing page, about us, contact us and 404 Not found page.   
      </p>

      <div class="flex gap-4">
        <button class="px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700">
          Get Started
        </button>
        <button class="px-6 py-3 border border-violet-600 text-violet-600 rounded-lg hover:bg-violet-50">
          Learn More
        </button>
      </div>
    </div>

    <!-- Image -->
    <div class="flex-1">
      <img
        src="https://illustrations.popsy.co/gray/work-from-home.svg"
        alt="Hero Illustration"
        class="w-full max-w-md mx-auto"
      />
    </div>

  </section>


  <!-- Footer -->
  <footer class="bg-gray-900 text-gray-400 py-6">
    <div class="max-w-6xl mx-auto px-6 text-center">
      © 2026 All rights reserved.
    </div>
  </footer>

</body>
</html>
`);
    res.statusCode = 201;
    return res.end();
  } else if (req.url === "/about") {
    res.write(`
        <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>About  Page</title>

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 text-gray-800">

  <!-- Navbar -->
  <header class="bg-white shadow">
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <h1 class="text-xl font-bold text-violet-600">About  Page</h1>
      <nav class="space-x-6 hidden md:block">
        <a href="/home" class="hover:text-violet-600">Home</a>
        <a href="/about" class="hover:text-violet-600">About</a>
        <a href="/contact" class="hover:text-violet-600">Contact</a>
      </nav>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
    
    <!-- Text -->
    <div class="flex-1">
      <h2 class="text-4xl font-bold leading-tight mb-4">
        Simple About  Page <span class="text-violet-600">Using http Module</span>
      </h2>
      <p class="text-gray-600 mb-6">
        Home page fetch from the server using http module. Server consist landing page, about us, contact us and 404 Not found page.   
      </p>

      <div class="flex gap-4">
        <button class="px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700">
          Get Started
        </button>
        <button class="px-6 py-3 border border-violet-600 text-violet-600 rounded-lg hover:bg-violet-50">
          Learn More
        </button>
      </div>
    </div>

    <!-- Image -->
    <div class="flex-1">
      <img
        src="https://popsy-assets.6d7f1376eb77bb5467178bd740961d17.r2.cloudflarestorage.com/notion/adventure.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=74b6c77827cafff9c0444f8a29156c5e%2F20260117%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260117T074336Z&X-Amz-Expires=900&X-Amz-Signature=f3c571117b5ef5c08c0f7445646bbb1bdd9b9cdc04cea08bb704d7ab993a30a5&X-Amz-SignedHeaders=host&response-content-disposition=inline&x-amz-checksum-mode=ENABLED&x-id=GetObject"
        alt="About Illustration"
        class="w-full max-w-md mx-auto"
      />
    </div>

  </section>


  <!-- Footer -->
  <footer class="bg-gray-900 text-gray-400 py-6">
    <div class="max-w-6xl mx-auto px-6 text-center">
      © 2026 All rights reserved.
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
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contact  Page</title>

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 text-gray-800">

  <!-- Navbar -->
  <header class="bg-white shadow">
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <h1 class="text-xl font-bold text-violet-600">Contact  Page</h1>
      <nav class="space-x-6 hidden md:block">
        <a href="/home" class="hover:text-violet-600">Home</a>
        <a href="/about" class="hover:text-violet-600">About</a>
        <a href="/contact" class="hover:text-violet-600">Contact</a>
      </nav>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
    
    <!-- Text -->
    <div class="flex-1">
      <h2 class="text-4xl font-bold leading-tight mb-4">
        Simple Contact  Page <span class="text-violet-600">Using http Module</span>
      </h2>
      <p class="text-gray-600 mb-6">
        Home page fetch from the server using http module. Server consist landing page, about us, contact us and 404 Not found page.   
      </p>

      <div class="flex gap-4">
        <button class="px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700">
          Get Started
        </button>
        <button class="px-6 py-3 border border-violet-600 text-violet-600 rounded-lg hover:bg-violet-50">
          Learn More
        </button>
      </div>
    </div>

    <!-- Image -->
    <div class="flex-1">
      <img
        src="https://popsy-assets.6d7f1376eb77bb5467178bd740961d17.r2.cloudflarestorage.com/notion/budgeting.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=74b6c77827cafff9c0444f8a29156c5e%2F20260117%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260117T074629Z&X-Amz-Expires=900&X-Amz-Signature=67c59c10d5a13a9bffd7a8aea568773c1a0233088b3a89823974ecc493a2bd45&X-Amz-SignedHeaders=host&response-content-disposition=inline&x-amz-checksum-mode=ENABLED&x-id=GetObject"
        alt="About Illustration"
        class="w-full max-w-md mx-auto"
      />
    </div>

  </section>


  <!-- Footer -->
  <footer class="bg-gray-900 text-gray-400 py-6">
    <div class="max-w-6xl mx-auto px-6 text-center">
      © 2026 All rights reserved.
    </div>
  </footer>

</body>
</html>
`);
    res.statusCode = 201;
    return res.end();
  } else {
    res.write(`
        <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Page Note Found</title>

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 text-gray-800">

  <!-- Navbar -->
  <header class="bg-white shadow">
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <h1 class="text-xl font-bold text-violet-600">404  Page</h1>
      <nav class="space-x-6 hidden md:block">
        <a href="/home" class="hover:text-violet-600">Home</a>
        <a href="/about" class="hover:text-violet-600">About</a>
        <a href="/contact" class="hover:text-violet-600">Contact</a>
      </nav>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="max-w-6xl mx-auto px-6 py-20 ">
    <!-- Image -->
    <div class="flex-1">
      <img src="https://popsy-assets.6d7f1376eb77bb5467178bd740961d17.r2.cloudflarestorage.com/notion/cloud-computing.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=74b6c77827cafff9c0444f8a29156c5e%2F20260117%2Fauto%2Fs3%2Faws4_request&X-Amz-Date=20260117T134029Z&X-Amz-Expires=900&X-Amz-Signature=2fdb120b2a57aa6fd9910ca2ae8d68df15ef5bdd04a461e81d4b4d4ba7fb2795&X-Amz-SignedHeaders=host&response-content-disposition=inline&x-amz-checksum-mode=ENABLED&x-id=GetObject" alt=" Illustration" class="w-full max-w-md mx-auto"/>
      <h3 class="text-center text-2xl">Page Not Found 404!</h3>
    </div>

  </section>


  <!-- Footer -->
  <footer class="bg-gray-900 text-gray-400 py-6">
    <div class="max-w-6xl mx-auto px-6 text-center">
      © 2026 All rights reserved.
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
   