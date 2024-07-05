<Will write explanation soon>

Nike-CLone:-
An online shopping platform, where various filters help the customers chose the right article for their needs.

Tech Stack used: React + Redux toolkit

Features:
1) User signup and login user redux toolkit
2) Filters to live sieve through products
3) Search feature for keywords on the product Name
4) Favorites section with session-persistence of products

Components used in React:
1) Signup and Login
2) Navbar
3) Searchbar
4) Product Page
5) Favorites
6) Sidebar
7) MainDisplay
8) Product Card

Component flow:-

                                      __________________ ProductCard
App ------>(SignIn + Login)           |                   |
App ----->Navbar + (ProductPage / Favorites)              |
           |             |                                |
        Searchbar      (SideBar + Main Display)           |
                                        |_________________|


Store: 
Favorites array: products from favorites page added here
Username: username of the current session user
password: same as above
emailid: same as above
IsLoggedIn: to decide whether to display login+Signup or ProductPage



     
