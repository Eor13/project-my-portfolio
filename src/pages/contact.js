const Contact =() =>{
    return(
        <section className="containerContact">
            <h1>Adorei receber um email seu!</h1>
            <form target="_blank" action="https://formsubmit.co/2af952cff878e67081a68146c5baf415" method="POST">
                <div className="form-group">
                <div className="form-row">
                    <div className="col">
                    <input type="text" name="name" className="form-control" placeholder="Full Name" required/>
                    </div>
                    <div className="col">
                    <input type="email" name="email" className="form-control" placeholder="Email Address" required/>
                    </div>
                </div>
                </div>
                <div className="form-group">
                <textarea placeholder="Your Message" className="form-control" name="message" rows="10" required></textarea>
                </div>
                <button type="submit" class="btn btn-lg btn-dark btn-block">Submit Form</button>
                <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"></input>
            </form>
        </section>
    )
}
export {Contact}