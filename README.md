# Car Sales Website Template

This is a full-featured **Car Dealership Website** that allows dealers/admins to add, edit, and manage car inventory, and enables customers to browse, book, and inquire about vehicles. The platform includes user authentication with separate dashboards for customers and dealers.

---

## Features

* 🚗 Browse available cars with details, images, and booking option
* 🛠️ Dealer/Admin panel for managing car listings and inventory
* 🔐 Secure login/signup system for both customers and dealers
* 📆 Booking system for customers to reserve or schedule test drives
* 🧾 Booking history and status tracking for users
* 📋 Dashboard view for both customers and dealers

---

## Tech Stack

* **Frontend**: HTML5, CSS3, JavaScript, Bootstrap
* **Backend**: Python (Flask)
* **Database**: SQLite
* **Templating Engine**: Jinja2
* **ORM**: SQLAlchemy
* **Authentication**: Flask-Login
* **Form Handling**: Flask-WTF

---

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/car-sales-website.git
cd car-sales-website
```

2. **Set up a virtual environment**

```bash
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
```

3. **Install dependencies**

```bash
pip install -r requirements.txt
```

4. **Run the application**

```bash
python app.py
```

The website will be available at `http://localhost:5000`.

---

## Project Structure

```
car-sales-website/
│
├── app.py
├── config.py
├── requirements.txt
├── /static/               # CSS, JS, Images
├── /templates/            # HTML templates
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   ├── add_car.html
│   ├── car_list.html
│   └── book_car.html
├── /models/               # SQLAlchemy models
├── /routes/               # Flask Blueprints (auth, admin, customer)
└── /utils/                # Helpers, validators
```

---

## Usage

* Dealers/Admins can:

  * Log in to their dashboard
  * Add new cars with details and images
  * View and manage current listings
  * Track bookings made by customers

* Customers can:

  * Sign up and log in
  * Browse available cars
  * View car details
  * Book cars or schedule test drives

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

