function Order({username, usercontact, useradress, cartitems}) {
    return (
        <div>
            <p>{username} , {usercontact} , {useradress}</p>
            {cartitems.map((item) => (
                <p>{item.seller_name} , {item.seller_contact}, {item.seller_address}</p>
            ))}
        </div>
    )
}

export default Order
