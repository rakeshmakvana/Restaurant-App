import React from "react";
import "../styles/trendingmenu.css";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const TrendingMenu = () => {
    const menuItems = [
        {
            id: 1,
            name: "Cheeseburger",
            orders: 200,
            price: "₹ 6.29",
            image: "https://s3-alpha-sig.figma.com/img/2219/e5be/2ad9d683186e027903e0156fdf01e726?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G5WnhzCHBoowAvy3X2AXwq0r1e0bAkgUPOcEx2Jrmxq-cj6j5uLc6z9LK1nBMVZXcv214RInBchuER6NLtjMdlCoZRYS~GxrJbadkGQ90DltcsktCdKIlIUh0aHKbOXO32M4zQmxaeYV0NrYpgl7U6zLrWjP0oUvI0E2VNXnlcKK4nlCcfqnzW-GtC3EZ3z8SjM48YphpLejLvjbdwsjfUyiCQCM~jJCcxpL2i-c98Oe9wb-bKYy8oIBr9Nn~NBcO6pBCZCWe0YrURu0mXjRJapEbAd~hfo~IXVTVsWrhow~kH2DcT8pNYhc2gOAm8G2yv4j59z8veuP4oqja-yXWA__",

        },
        {
            id: 2,
            name: "New York Style Pizza",
            orders: 180,
            price: "₹ 6.29",
            image: "https://s3-alpha-sig.figma.com/img/9304/8643/62ff4b6ad64248fed58d509495443e72?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z~hxKB00FTuSjGNwtzHIWyJDweA2-SblT7Yeuh3n0~cyqifF0DCLHmQs9VqHbLY-E01h53weNnThT7fsK2whEWMno0JXfSfTb0HZlybR4JNrLGA7n80YrFBQ9OZmxfKg4LO7zgp5z0sSBvET~0q1IrJjY45gLznMeIE01mpb7HHEjH1RB49Z3ZfZK4M0nTrIaGOyYPV7iIAyfwz5xSblk7eIaHxpYhY5j2ZNLjq09uyNJuNfPZNsDPGHPACq2Hn9oA~cO9UOv~x~ePWbvnzhIWXDfeYU2xsZhZknjKLXskDdW0ArTmLBWqLcGTL59dEAjAFHTLmjlAuC4L3RR6jWiw__",
        },
        {
            id: 3,
            name: "Noodles",
            orders: 120,
            price: "₹ 6.29",
            image: "https://s3-alpha-sig.figma.com/img/3017/7d08/15f39151bb465ae579ffcbc87e58057c?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BKr8lf~Fwiza2LvTfLThnpCWpPQ-9YKZDIGXgR4a3CEESI2OnyYLnTQRSGZCV6GX9hfi1tz8Wk8atxcSXrF3qvESy1mzv7E53WPZ-9p-~1bufEJI4~LoadjuI1LcnsnPqGBa82P8vWFxg1LnQvhz3ksKI482GM-BLFXdBqHh5aTRb5qMAPDT~-tuWSmbYSv33gYce15cJEzSEXLBu0H34xVK4B2uFD50uxM-kH7a4QUXNvJNm~XA6KKniP9WuQ2zV5foP-fxvcPfBQMKOrX-D~RQtyz79upQXEVx72PLW7ISGSMb2gbLHGKSFfYGCRWFeJ4o-8cCbb3W9aJ14wE3Iw__",
        },
        {
            id: 4,
            name: "Gravy Noodles",
            orders: 100,
            price: "₹ 6.29",
            image: "https://s3-alpha-sig.figma.com/img/fafe/fc33/635ff4d5075fea10df90e50b3e372e79?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HBVdzV8zV2KaBnTIHp28OkFMl3CluKiS~jgpH13-foHbDWxrXly~4FJVTi3SwWUQQfJQzekoftGZ4XlhJBxXLH~3qRg9ABDtMacGO-E7zblaU3Vne-rzkb65q1ALp9wqSVlhsLo558k5pVVBeSdAcBOpYNl~-YZX04uQtJGFnW8sI5cd0-2avCH9H8gWNaHhHxP2pOz2G-UgazeYMfo0ZvZJD0YsxCsZTX21ypZ~jvUKDtNlbsH~ID6F6ZLvQf09xWOdQVThijsx8nPwwnVP-303peejTNweJeu9CvgCGsMe2FaW17Lpw5kuloetKmrSU--g42qbxw~Xp1nPw2hegQ__",
        },
        {
            id: 5,
            name: "Pasta",
            orders: 80,
            price: "₹ 6.29",
            image: "https://s3-alpha-sig.figma.com/img/cf9f/8303/b780ff052314d2e493bc05b86e687a64?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pRZ915LsPO-nlJI2joJYEsErU7BmgGNLTeavQ2EvZ6djb-V3xjmqngMyxCkzVTGnsYhjzIuivphDy~1L2RDoT1qdSqNlEfnWERwrp7b1VZE5hqFTiZeqNcpVZlF30EunRsQ0A7FifXG5QpXy7RIxNEOO6NtL6naensjHJdtV~QH~IIvpxijgwVXtZMYVtF2H79E9qtF27YIQQrgPmlCDd1dtEBZqmAmKYVo0J8oTIfpOhaG1upvvDClNBZ-htC4CXiltFpmsG4SaIGP96tyD8GhgC1uPlT3bju3GQdS62pgN1F6qoVopv1FnMt6mc380ZfhqUxuYFFvVihmtDmCw~A__",
        },
        {
            id: 6,
            name: "Pasta",
            orders: 50,
            price: "₹ 6.29",
            image: "https://s3-alpha-sig.figma.com/img/2219/e5be/2ad9d683186e027903e0156fdf01e726?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G5WnhzCHBoowAvy3X2AXwq0r1e0bAkgUPOcEx2Jrmxq-cj6j5uLc6z9LK1nBMVZXcv214RInBchuER6NLtjMdlCoZRYS~GxrJbadkGQ90DltcsktCdKIlIUh0aHKbOXO32M4zQmxaeYV0NrYpgl7U6zLrWjP0oUvI0E2VNXnlcKK4nlCcfqnzW-GtC3EZ3z8SjM48YphpLejLvjbdwsjfUyiCQCM~jJCcxpL2i-c98Oe9wb-bKYy8oIBr9Nn~NBcO6pBCZCWe0YrURu0mXjRJapEbAd~hfo~IXVTVsWrhow~kH2DcT8pNYhc2gOAm8G2yv4j59z8veuP4oqja-yXWA__",
        },
    ];

    return (
        <div className="trending-menu-container">
            <div className="container">
                <div className="trending-title d-flex align-iteams-center justify-content-between">
                    <MdOutlineKeyboardArrowLeft />
                    <h2 className="trending-menu-title border-0" style={{ fontSize: "18px" }}>Trending Menu</h2>
                </div>
                <div className="row">
                    {menuItems.map((item) => (
                        <div className="col-12 mb-3" key={item.id}>
                            <div className="menu-item-card">
                                <div className="row align-items-center">
                                    <div className="col-3">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="menu-item-image"
                                            style={{ width: "80px", height: "80px" }}
                                        />
                                    </div>
                                    <div className="col-6">
                                        <h5 className="menu-item-name">{item.name}</h5>
                                        <p className="menu-item-orders">Order Per Day - {item.orders}</p>
                                        <p className="menu-item-price">{item.price}</p>
                                    </div>
                                    <div className="col-3 text-end">
                                        <button className="btn order-now-btn">Order Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button className="menu-btn">
                <i className="bi bi-list"></i> Menu
            </button>
        </div>
    );
};

export default TrendingMenu;
