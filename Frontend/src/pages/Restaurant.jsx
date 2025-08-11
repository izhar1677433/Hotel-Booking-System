// ============================
// Imports
// ============================
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { MapPin, Star, Search, Heart, Filter, X } from "lucide-react";
import { PageLayout, Container, Section, Grid, Card, Button } from "../components/layout";

// ============================
// Mock Data
// ============================
const mockData = [
  {
    id: 1,
    name: "Fried Chicken Pieces",
    cuisine: "Pakistani",
    rating: 4.7,
    priceRange: "$$",
    location: "Islamabad, Pakistan",
    hours: "11:00 - 23:00",
    img: "https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHN8ZW58MHx8MHx8fDA%3D",
    desc: "Cozy spot for grilled seafood, wood-fired flavors & fresh salads.",
  },
  {
    id: 2,
    name: "Bistro 21",
    cuisine: "French",
    rating: 4.5,
    priceRange: "$$$",
    location: "Islamabad, Pakistan",
    hours: "07:30 - 22:30",
    img: "https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&w=1200&auto=format&fit=crop",
    desc: "Elegant bistro offering classic French dishes and fine wine.",
  },
  {
    id: 3,
    name: "Grilled meats and vegetables",
    cuisine: "French",
    rating: 4.5,
    priceRange: "$$$",
    location: "Islamabad, Pakistan",
    hours: "07:30 - 22:30",
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHN8ZW58MHx8MHx8fDA%3D",
    desc: "Elegant bistro offering classic French dishes and fine wine.",
  },
  {
    id: 4,
    name: "Corn Soap",
    cuisine: "Pakistani",
    rating: 4.6,
    priceRange: "$",
    location: "Islamabad, Pakistan",
    hours: "12:00 - 00:00",
    img: "https://images.unsplash.com/photo-1544681280-d25a782adc9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoZWYlMjBmb29kfGVufDB8fDB8fHww",
    desc: "Authentic tandoori flavors, charcoal-grilled meats and naan.",
  },
  {
    id: 4,
    name: "Zinger Burger",
    cuisine: "Pakistani",
    rating: 4.6,
    priceRange: "$",
    location: "Islamabad, Pakistan",
    hours: "12:00 - 00:00",
    img: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
    desc: "Authentic tandoori flavors, charcoal-grilled meats and naan.",
  },
  {
    id: 4,
    name: "Chiken",
    cuisine: "Pakistani",
    rating: 4.6,
    priceRange: "$",
    location: "Islamabad, Pakistan",
    hours: "12:00 - 00:00",
    img: "https://images.unsplash.com/photo-1577219492769-b63a779fac28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNoZWZ8ZW58MHx8MHx8fDA%3D",
    desc: "Authentic tandoori flavors, charcoal-grilled meats and naan.",
  },
  {
    id: 4,
    name: "Dak Galbi",
    cuisine: "korean",
    rating: 4.6,
    priceRange: "$",
    location: "Islamabad, Pakistan",
    hours: "12:00 - 00:00",
    img: "https://images.unsplash.com/photo-1595576359780-91004705b4f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a29yZWFuJTIwJTIwZm9vZHN8ZW58MHx8MHx8fDA%3D",
    desc: "Authentic tandoori flavors, charcoal-grilled meats and naan.",
  },
  {
    id: 4,
    name: "North Indian meal",
    cuisine: "indian",
    rating: 4.6,
    priceRange: "$",
    location: "Islamabad, Pakistan",
    hours: "12:00 - 00:00",
    img: "https://images.unsplash.com/photo-1717587052948-fb9825de50f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGluZGlhbiUyMGZvb2RzfGVufDB8fDB8fHww",
    desc: "Authentic tandoori flavors, charcoal-grilled meats and naan.",
  },
  {
    id: 4,
    name: "Spiced chickpeas",
    cuisine: "South Asian",
    rating: 4.6,
    priceRange: "$",
    location: "Islamabad, Pakistan",
    hours: "12:00 - 00:00",
    img: "https://images.unsplash.com/photo-1728910758653-7e990e489cac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwZm9vZHN8ZW58MHx8MHx8fDA%3D",
    desc: "The image depicts a traditional meal setup, likely from South Asian cuisine. It includes a bowl of spiced rice or biryani with visible garnishes like curry leaves and a red chili. A hand is pouring a liquid, possibly ghee or oil, over the rice using a ladle. The dish is served on a decorative metal tray with a small bowl of raita (yogurt-based side) and some papad (crispy flatbread). There are also small bowls of what appears to be spiced chickpeas or a similar side dish, along with fresh mint leaves and ornate metal containers, suggesting a rich, cultural dining presentation. Authentic tandoori flavors, charcoal-grilled meats and naan.",
  },
  {
    id: 4,
    name: "lentil stew",
    cuisine: "Pakistani",
    rating: 4.6,
    priceRange: "$",
    location: "Islamabad, Pakistan",
    hours: "12:00 - 00:00",
    img: "https://plus.unsplash.com/premium_photo-1700752343056-e89926bf5ff9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGZvb2R8ZW58MHx8MHx8fDA%3D",
    desc: "The image shows a hearty bowl of lentil stew or dal (likely Indian-inspired, with visible tomatoes, spices, and lentils in a reddish broth), topped with a dollop of yogurt, fresh cilantro garnish, and red chili flakes. In the foreground, there's a small bowl of plain yogurt. The background includes another similar bowl of stew, a wooden spoon with red pepper flakes or chili powder, a slice of crusty bread on a plate, scattered cilantro leaves, and a folded brown napkin on a wooden table surface.Authentic tandoori flavors, charcoal-grilled meats and naan.",
  },
  {
    id: 4,
    name: "The Plated meal",
    cuisine: "Korean",
    rating: 4.6,
    priceRange: "$",
    location: "Islamabad, Pakistan",
    hours: "12:00 - 00:00",
    img: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGZvb2R8ZW58MHx8MHx8fDA%3D",
    desc: "The image features a plated meal on a rustic wooden table. The main dish consists of several pieces of grilled or roasted white fish fillets (possibly cod or hake), seasoned with herbs like chopped parsley, garlic, and perhaps olive oil, arranged on one side of a brown plate. Accompanying it is a small black bowl of creamy dipping sauce, likely aioli or tartar sauce. On the other side, there's a fresh green salad with lettuce leaves, topped with what appears to be crispy fried onions or shallots and possibly some nuts or seeds. Next to the salad are a couple of slices of crusty bread or baguette. In the blurred background, there are glasses filled with beverages, including what looks like a pint of beer or amber ale, and water glasses, suggesting a casual dining setting. Authentic tandoori flavors, charcoal-grilled meats and naan.",
  },
  {
    id: 4,
    name: "The Gourmet meal",
    cuisine: "china",
    rating: 4.6,
    priceRange: "$",
    location: "Islamabad, Pakistan",
    hours: "12:00 - 00:00",
    img: "https://images.unsplash.com/photo-1432139509613-5c4255815697?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZvb2R8ZW58MHx8MHx8fDA%3D",
    desc: "The image shows a close-up of a plated gourmet meal on a white rectangular dish, set on a gray granite-like outdoor table, possibly at a restaurant patio with blurred chairs in the background. The centerpiece is a thick, seared bone-in steak (likely a ribeye or tomahawk chop, with the prominent curved bone protruding), crusted with seasoning and drizzled in a glossy, dark red sauce that pools on the plate—possibly a red wine reduction or berry glaze mixed with caramelized onions or shallots. Accompanying it are steamed or grilled broccoli florets, a halved grilled tomato, and slices of roasted potatoes or root vegetables, all garnished lightly and arranged neatly. Authentic tandoori flavors, charcoal-grilled meats and naan.",
  },
  {
    id: 4,
    name: "The Breakfast dish",
    cuisine: "Pakistani",
    rating: 4.6,
    priceRange: "$",
    location: "Islamabad, Pakistan",
    hours: "12:00 - 00:00",
    img: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2R8ZW58MHx8MHx8fDA%3D",
    desc: "The image features a close-up of a breakfast dish: a tall stack of three thick slices of golden-brown French toast (likely made from brioche or similar bread, with crispy edges and a soft interior), layered and topped with fresh banana slices and blueberries. It's generously drizzled with a glossy syrup (possibly maple or honey), and lightly dusted with powdered sugar. The stack is presented on a black plate against a neutral gray fabric background, emphasizing the vibrant colors of the fruits and the appetizing glaze.Authentic tandoori flavors, charcoal-grilled meats and naan.",
  },
  {
    id: 4,
    name: "Pizza",
    cuisine: "Pakistani",
    rating: 4.6,
    priceRange: "$",
    location: "Islamabad, Pakistan",
    hours: "12:00 - 00:00",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    desc: "Authentic tandoori flavors, charcoal-grilled meats and naan.",
  },
  {
    id: 4,
    name: "The Tandoor House",
    cuisine: "Pakistani",
    rating: 4.6,
    priceRange: "$",
    location: "Islamabad, Pakistan",
    hours: "12:00 - 00:00",
    img: "https://plus.unsplash.com/premium_photo-1673769108022-cef7f3d767f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpbmVzZSUyMGZvb2RzfGVufDB8fDB8fHww",
    desc: "Authentic tandoori flavors, charcoal-grilled meats and naan.",
  },
  {
    id: 4,
    name: "Chicken",
    cuisine: "Pakistani",
    rating: 4.6,
    priceRange: "$",
    location: "Islamabad, Pakistan",
    hours: "12:00 - 00:00",
    img: "https://plus.unsplash.com/premium_photo-1663840345377-3813d196d5da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNoaWNrZW58ZW58MHx8MHx8fDA%3D",
    desc: "Authentic tandoori flavors, charcoal-grilled meats and naan.",
  },
  {
    id: 4,
    name: "Chicken Brost",
    cuisine: "Pakistani",
    rating: 4.6,
    priceRange: "$",
    location: "Islamabad, Pakistan",
    hours: "12:00 - 00:00",
    img: "https://plus.unsplash.com/premium_photo-1669742928112-19364a33b530?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D",
    desc: "Authentic tandoori flavors, charcoal-grilled meats and naan.",
  },
  {
    id: 4,
    name: "Chinese Rice",
    cuisine: "China",
    rating: 4.6,
    priceRange: "$",
    location: "Islamabad, Pakistan",
    hours: "12:00 - 00:00",
    img: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJpY2V8ZW58MHx8MHx8fDA%3D",
    desc: "Authentic tandoori flavors, charcoal-grilled meats and naan.",
  },
];

// ============================
// Small Components
// ============================
function StarBadge({ rating }) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full bg-white/70 px-2 py-1 text-sm font-medium backdrop-blur-sm dark:bg-black/60">
      <Star size={14} />
      <span>{rating.toFixed(1)}</span>
    </div>
  );
}

function RestaurantCard({ r, onOpen }) {
  return (
    <motion.article
      layout
      whileHover={{ translateY: -6 }}
      className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md transition-all duration-200 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800"
    >
      {/* Image */}
      <div className="relative h-44 sm:h-48 lg:h-56">
        <img src={r.img} alt={r.name} className="h-full w-full object-cover" />
        <div className="absolute top-3 left-3">
          <StarBadge rating={r.rating} />
        </div>
        <button
          onClick={() => onOpen(r)}
          className="absolute top-3 right-3 rounded-lg bg-white/80 p-2 backdrop-blur-sm transition-colors hover:bg-white dark:bg-black/60 dark:hover:bg-black/80"
          aria-label={`Open ${r.name}`}
        >
          <Heart size={18} />
        </button>
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4">
        <h3 className="text-base font-semibold sm:text-lg">{r.name}</h3>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-300 sm:text-sm">
          {r.cuisine} • {r.priceRange}
        </p>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-300 sm:gap-2 sm:text-sm">
            <MapPin size={12} className="sm:w-3.5 sm:h-3.5" />
            <span className="truncate max-w-[120px] sm:max-w-[150px]">{r.location}</span>
          </div>
          <button
            onClick={() => onOpen(r)}
            className="rounded-full bg-amber-500 px-2 py-1 text-xs font-medium text-white shadow-sm transition-all hover:brightness-95 sm:px-3 sm:py-1 sm:text-sm"
          >
            View
          </button>
        </div>
      </div>
    </motion.article>
  );
}

// ============================
// Main Page Component
// ============================
export default function RestaurantsPage() {
  // State
  const [query, setQuery] = useState("");
  const [cuisine, setCuisine] = useState("All");
  const [sort, setSort] = useState("featured");
  const [selected, setSelected] = useState(null);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Filters
  const cuisines = useMemo(
    () => ["All", ...new Set(mockData.map((m) => m.cuisine))],
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = mockData.filter((r) => {
      const matchesQuery =
        !q ||
        r.name.toLowerCase().includes(q) ||
        r.cuisine.toLowerCase().includes(q) ||
        r.location.toLowerCase().includes(q);
      const matchesCuisine = cuisine === "All" || r.cuisine === cuisine;
      return matchesQuery && matchesCuisine;
    });

    if (sort === "rating") list = list.sort((a, b) => b.rating - a.rating);
    if (sort === "price")
      list = list.sort((a, b) => a.priceRange.length - b.priceRange.length);
    return list;
  }, [query, cuisine, sort]);

  return (
    <PageLayout
      title="Royal Heights Restaurants"
      subtitle="Handpicked restaurants nearby — search by name, cuisine or location. Reserve a table or explore menus and photos."
      showHero={true}
      heroImage="https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
    >
      <Section>
        <Container>
          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            {/* Search */}
            <div className="flex w-full max-w-md items-center rounded-full bg-white px-3 py-2 shadow-sm dark:bg-slate-700">
              <Search size={16} />
              <input
                className="ml-2 flex-1 bg-transparent text-sm outline-none"
                placeholder="Search restaurants, cuisines, locations..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            {/* Mobile Filter Button */}
            <div className="flex lg:hidden">
              <Button
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                variant="primary"
                size="md"
              >
                <Filter size={16} className="mr-2" />
                Filters
              </Button>
            </div>

            {/* Mobile Filters Dropdown */}
            {showMobileFilters && (
              <Card className="lg:hidden">
                <div className="mb-3 flex items-center justify-between">
                  <h4 className="font-medium">Filters</h4>
                  <button
                    onClick={() => setShowMobileFilters(false)}
                    className="rounded-full p-1 hover:bg-slate-100 dark:hover:bg-slate-700"
                  >
                    <X size={16} />
                  </button>
                </div>
                <div className="space-y-3">
                  <select
                    value={cuisine}
                    onChange={(e) => setCuisine(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-slate-600 dark:bg-slate-700"
                  >
                    {cuisines.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>

                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm dark:border-slate-600 dark:bg-slate-700"
                  >
                    <option value="featured">Featured</option>
                    <option value="rating">Top Rated</option>
                    <option value="price">Price</option>
                  </select>
                </div>
              </Card>
            )}

            {/* Desktop Dropdowns */}
            <div className="hidden gap-2 lg:flex">
              <select
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                className="rounded-full bg-white px-3 py-2 text-sm dark:bg-slate-700"
              >
                {cuisines.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="rounded-full bg-white px-3 py-2 text-sm dark:bg-slate-700"
              >
                <option value="featured">Featured</option>
                <option value="rating">Top Rated</option>
                <option value="price">Price</option>
              </select>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid gap-6 lg:grid-cols-4 xl:grid-cols-5">
            {/* Cards Grid */}
            <section className="lg:col-span-3 xl:col-span-4">
              <Grid cols={3} gap="gap-4">
                {filtered.map((r) => (
                  <RestaurantCard key={r.id} r={r} onOpen={setSelected} />
                ))}

                {filtered.length === 0 && (
                  <div className="col-span-full py-12 text-center text-slate-500">
                    No restaurants found. Try a different search.
                  </div>
                )}
              </Grid>
            </section>
            
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <Card className="sticky top-24">
                <h4 className="font-semibold text-sm sm:text-base">Quick Filters</h4>
                <div className="mt-3 flex flex-col gap-2">
                  <label className="inline-flex items-center gap-2 text-sm">
                    <input type="checkbox" className="rounded" /> Open now
                  </label>
                  <label className="inline-flex items-center gap-2 text-sm">
                    <input type="checkbox" className="rounded" /> Offers delivery
                  </label>
                  <label className="inline-flex items-center gap-2 text-sm">
                    <input type="checkbox" className="rounded" /> Outdoor seating
                  </label>
                  <label className="inline-flex items-center gap-2 text-sm">
                    <input type="checkbox" className="rounded" /> Indoor seating
                  </label>
                </div>

                <div className="mt-6">
                  <h5 className="font-medium text-sm sm:text-base">Top picks</h5>
                  <ul className="mt-3 space-y-3 text-xs sm:text-sm">
                    {mockData.slice(0, 3).map((r) => (
                      <li key={r.id} className="flex items-center gap-3">
                        <img
                          src={r.img}
                          alt={r.name}
                          className="h-10 w-10 rounded-lg object-cover sm:h-12 sm:w-12"
                        />
                        <div className="min-w-0 flex-1">
                          <div className="font-medium truncate">{r.name}</div>
                          <div className="text-xs text-slate-500">
                            {r.cuisine} • {r.rating}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </aside>
          </div>
        </Container>
      </Section>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setSelected(null)}
          />
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-slate-800"
          >
            <div className="grid sm:grid-cols-2">
              <img
                src={selected.img}
                alt={selected.name}
                className="h-48 w-full object-cover sm:h-64"
              />
              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold sm:text-2xl">{selected.name}</h3>
                    <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                      {selected.cuisine} • {selected.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500 sm:text-sm">Hours</div>
                    <div className="text-sm font-medium sm:text-base">{selected.hours}</div>
                  </div>
                </div>

                <p className="mt-4 text-sm text-slate-600 sm:text-base">{selected.desc}</p>

                <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:gap-3">
                  <Button variant="primary" size="md">
                    Reserve Table
                  </Button>
                  <Button 
                    variant="outline" 
                    size="md"
                    onClick={() => setSelected(null)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </PageLayout>
  );
}
