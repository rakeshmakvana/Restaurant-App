import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SearchResults.css";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const SearchResults = () => {
  const results = [
    {
      name: "Hamburger Cheeseburger",
      description: "including premium beef, freshly baked brioche.",
      price: "₹6.29",
      image: "https://s3-alpha-sig.figma.com/img/2219/e5be/2ad9d683186e027903e0156fdf01e726?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G5WnhzCHBoowAvy3X2AXwq0r1e0bAkgUPOcEx2Jrmxq-cj6j5uLc6z9LK1nBMVZXcv214RInBchuER6NLtjMdlCoZRYS~GxrJbadkGQ90DltcsktCdKIlIUh0aHKbOXO32M4zQmxaeYV0NrYpgl7U6zLrWjP0oUvI0E2VNXnlcKK4nlCcfqnzW-GtC3EZ3z8SjM48YphpLejLvjbdwsjfUyiCQCM~jJCcxpL2i-c98Oe9wb-bKYy8oIBr9Nn~NBcO6pBCZCWe0YrURu0mXjRJapEbAd~hfo~IXVTVsWrhow~kH2DcT8pNYhc2gOAm8G2yv4j59z8veuP4oqja-yXWA__",
    },
    {
      name: "classic cheese burger",
      description: "including premium beef, freshly baked brioche.",
      price: "₹6.29",
      image: "https://s3-alpha-sig.figma.com/img/9304/8643/62ff4b6ad64248fed58d509495443e72?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z~hxKB00FTuSjGNwtzHIWyJDweA2-SblT7Yeuh3n0~cyqifF0DCLHmQs9VqHbLY-E01h53weNnThT7fsK2whEWMno0JXfSfTb0HZlybR4JNrLGA7n80YrFBQ9OZmxfKg4LO7zgp5z0sSBvET~0q1IrJjY45gLznMeIE01mpb7HHEjH1RB49Z3ZfZK4M0nTrIaGOyYPV7iIAyfwz5xSblk7eIaHxpYhY5j2ZNLjq09uyNJuNfPZNsDPGHPACq2Hn9oA~cO9UOv~x~ePWbvnzhIWXDfeYU2xsZhZknjKLXskDdW0ArTmLBWqLcGTL59dEAjAFHTLmjlAuC4L3RR6jWiw__",
    },
    {
      name: "burger with beef",
      description: "including premium beef, freshly baked brioche.",
      price: "₹6.29",
      image: "https://s3-alpha-sig.figma.com/img/e2fc/379b/8bc1ce4e56845fb6c9ad32c843fa3aa7?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DPWSF1UgoYRsmGXhbCK3xakIc-UZ2oVHK~PB3suhT2oNKaHibVC8Y7MRz0GBVQt1iB3coao4WEtmTmhfUmunSPUfbzs6kXJQpq78CvUoyIIsnRNIqNreC4sWmRW6esTca3OS2Lutkd6FYX8HKV7G4I5ijaBFIgD2v6vyIBm75pcOtN15WpD18fj6oMp8CsgH~n0FQxImDjhdsqLrNDbyEKz3T4TZJ~MRUTFLNX1M0YvN4yVML20dTsmF-7KG2t28kxX6MNkim~9WkfgMMjO-mpYdFLf5O8AKBp97OywIBS21xPthvuMrOcMBKjA0XJGzi-WpGDkJ1n-89G4SMV6TxA__",
    },
    {
      name: "Air fryer cheeseburgers",
      description: "including premium beef, freshly baked brioche.",
      price: "₹6.29",
      image: "https://s3-alpha-sig.figma.com/img/2219/e5be/2ad9d683186e027903e0156fdf01e726?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G5WnhzCHBoowAvy3X2AXwq0r1e0bAkgUPOcEx2Jrmxq-cj6j5uLc6z9LK1nBMVZXcv214RInBchuER6NLtjMdlCoZRYS~GxrJbadkGQ90DltcsktCdKIlIUh0aHKbOXO32M4zQmxaeYV0NrYpgl7U6zLrWjP0oUvI0E2VNXnlcKK4nlCcfqnzW-GtC3EZ3z8SjM48YphpLejLvjbdwsjfUyiCQCM~jJCcxpL2i-c98Oe9wb-bKYy8oIBr9Nn~NBcO6pBCZCWe0YrURu0mXjRJapEbAd~hfo~IXVTVsWrhow~kH2DcT8pNYhc2gOAm8G2yv4j59z8veuP4oqja-yXWA__",
    },
    {
      name: "Aristocrat burger",
      description: "including premium beef, freshly baked brioche.",
      price: "₹6.29",
      image: "https://s3-alpha-sig.figma.com/img/4c35/4049/816c2daf777edc2ce51d2d4d7616ab6c?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gy3aREIlPVOZ6vKLfX7vpjGSsJ9vJjBUBYCUtzFvEGvj1~42wNf3~kMwWnMBH25n6XSeP4wYXdxaMxZZWL9V03n4CiJniT9TgTNJey6q48j3-62-~s0-Q~ASOMtrzF0tsSGN52qqzgH0Tyt5Rus85TUgIaeGhrhg5qMdrZu-xe5Yp~fFsgdfEOlPB4jwzGuvKven7APbrV2~JlsiwDG2KBwAeYA6MU-cVZEeW01k01ohXMLrxLlgSKjioF1cLABi636HCNomY1T91fu6ojZvL4qArjzHH-LvtZg45SrvlSWhuVqIrOJuGDDuuEPy9LAGxnm9oiJ8hEameT839aUC3Q__",
    },
    {
      name: "Avocado Burger",
      description: "including premium beef, freshly baked brioche.",
      price: "₹6.29",
      image: "https://s3-alpha-sig.figma.com/img/2219/e5be/2ad9d683186e027903e0156fdf01e726?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G5WnhzCHBoowAvy3X2AXwq0r1e0bAkgUPOcEx2Jrmxq-cj6j5uLc6z9LK1nBMVZXcv214RInBchuER6NLtjMdlCoZRYS~GxrJbadkGQ90DltcsktCdKIlIUh0aHKbOXO32M4zQmxaeYV0NrYpgl7U6zLrWjP0oUvI0E2VNXnlcKK4nlCcfqnzW-GtC3EZ3z8SjM48YphpLejLvjbdwsjfUyiCQCM~jJCcxpL2i-c98Oe9wb-bKYy8oIBr9Nn~NBcO6pBCZCWe0YrURu0mXjRJapEbAd~hfo~IXVTVsWrhow~kH2DcT8pNYhc2gOAm8G2yv4j59z8veuP4oqja-yXWA__",
    },
  ];

  return (
    <div className="container search-results" style={{ backgroundColor: "#1b1b1b" }}>
      <div className="row mb-3">
        <div className="col-12 p-0">
          <div className="d-flex align-items-center bg-dark" style={{ padding: "15px 16px" }}>
            <MdOutlineKeyboardArrowLeft className="text-light" />
            <h3 className="text-light mb-0 ms-auto" style={{ fontSize: "18px" }}>Search</h3>
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <div className="col-12 p-1">
          <div className="search-bar p-2 border-0">
            <input
              type="text"
              className="form-control "
              placeholder="Search..."
              style={{ background: "rgba(37, 40, 54, 1)" }} />
            <button className="btn btn-search">🔍</button>
          </div>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-12 ">
          <p className="text-light">Showing results for <span className="text-highlight">Bur...</span></p>
        </div>
      </div>

      <div className="row">
        {results.map((item, index) => (
          <div key={index} className="col-12 mb-3">
            <div className="card bg-dark text-light">
              <div className="row g-0">
                <div className="col-2">
                  <div className="search-img d-flex align-items-center justify-content-between pt-3 ps-4">
                    <img src={item.image} alt={item.name} className="img-fluid rounded-start" width={80} height={60} />
                  </div>
                </div>
                <div className="col-7">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                  </div>
                </div>
                <div className="col-3 text-end d-flex flex-column justify-content-center align-items-center">
                  <p className="card-text price mb-1">{item.price}</p>
                  <button className="btn btn-order-now">Order Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
