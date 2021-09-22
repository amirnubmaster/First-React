import './Header.css'

const Header = () =>{
    return(
        <body>
            <header>
                <div class="banner">
                    <div class="top">
                        <div class="tm">
                            <img src="https://upload.wikimedia.org/wikipedia/sco/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1017px-Starbucks_Corporation_Logo_2011.svg.png" alt=""></img>
                            <ul>
                                <li>MENU</li>
                                <li>REWARDS</li>
                                <li>GIFT CARDS</li>
                            </ul>
                        </div>
                        <div class="sign">
                            <i class="fas fa-map-marker-alt"> Find a store</i>
                            <button>Sign in</button>
                            <button>Join now</button>
                        </div>
                    </div>
                </div>
                <div class="pod_banner">
                    <div class="lor">
                        <p>Following CDC guidance, facial coverings are recommended in our stores for all customers, ans are required where mandated by local law. <a href="#">Learn more</a></p>
                    </div>
                </div>
            </header>
            <main>
                <div class="block">
                    <div class="block1">
                        <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-73416.jpg" alt=""></img>
                    </div>
                    <div class="block2">
                        <h1>Fall into an easier routine</h1>
                        <p>Get your favorites, your way—order, pay and pick up with the app.</p>
                        <button>See pickup options</button>
                    </div>
                </div>


                <div class="block">
                    <div class="block3">
                        <h1>COMFORT TO THE CORE</h1>
                        <p>Introducing the new Apple Crisp Macchiato with notes of caramelized  apples, brown sugar and spiced apple drizzle. Available hot or iced.</p>
                        <button>Discover your new fave</button>
                    </div>
                    <div class="block4">
                        <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-73205.png" alt=""></img>
                    </div>
                </div>

                <div class="blockBurg">
                    <div class="block12">
                        <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-73417.jpg" alt=""></img>
                    </div>
                    <div class="block22">
                        <h1>HEARTY ON THE GO</h1>
                        <p>Tackle your mornings with a warm and toasty protein-packed breakfast like the Bacon, Gouda & Egg Sandwich or the Double-Smoked Bacon, Cheddar & Egg Sandwich.</p>
                        <button>Order now</button>
                    </div>
                </div>

                <div class="block">
                    <div class="block3">
                        <h1>TODAY DESERVES DELIVERY</h1>
                        <p>For a limited time, enjoy $0 Delivery Fee on Starbucks orders over $20 on Uber Eats*.</p>
                        <button>Order now</button>
                    </div>
                    <div class="block4">
                        <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-73803.jpg" alt=""></img>
                    </div>
                </div>

                <div class="block">
                    <div class="block13">
                        <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-73419.jpg"></img>
                    </div>
                    <div class="block23">
                        <h1>Join us in fighting hunger</h1>
                        <p>September is Hunger Action Month™ and we're proud to be a longtime partner of Feeding America®. Since 2016, we’ve helped donate nearly 34 million meals** to fight hunger – and counting.</p>
                        <button>Learn more</button>
                    </div>
                </div>

                <div class="bot">
                    <h4>*At participating stores. Some restrictions apply. See starbucks.com/rewards.</h4>
                    <p>**Terms, taxes and other fees may apply. Fees subject to change. Menu limited. Restricted delivery area. Available in participating locations only. Prices for Starbucks® items purchased through Uber Eats may be higher than posted in stores or as marked. See the Uber Eats app for details. Limited time offer. May not be combined with other offers, discounts or promotions.</p>
                </div>
                
            </main>
        </body>
    )
}

export default Header;