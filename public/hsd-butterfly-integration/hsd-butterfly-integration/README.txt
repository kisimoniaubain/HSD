HSD FLOATING BLUE BUTTERFLY INTEGRATION

1. Copy the `public` folder contents into your existing project's `public` folder.
   The three image layers must end up at:
   public/images/hsd-butterfly/left-wing.png
   public/images/hsd-butterfly/right-wing.png
   public/images/hsd-butterfly/body-and-antennae.png

2. Copy FloatingButterfly.jsx into:
   src/components/FloatingButterfly.jsx

3. Import and mount it ONCE in your top-level App/layout component, so it appears
   across the site. Example:

   import FloatingButterfly from "./components/FloatingButterfly";

   function App() {
     return (
       <>
         <FloatingButterfly />
         {/* Keep your existing Navbar, Routes, and Footer here. */}
       </>
     );
   }

   If App.jsx is in a different folder, adjust only the import path.
   Do not mount it separately on every page.

4. Run `npm run dev` and check the site.

The wing motion is a CSS 3D-style approximation using the separately extracted
left and right image layers. It is not a true 3D butterfly model. All three PNGs
share the same transparent 1536 x 1024 canvas so they align when stacked.
