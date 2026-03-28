from flask import Flask, render_template

app = Flask(__name__)

# --- RUTAS PRINCIPALES ---
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/sobre-mi')
def about():
    return render_template('about.html')

@app.route('/contacto')
def contact():
    return render_template('contact.html')

# --- RUTAS DE PROYECTOS ---
@app.route('/proyecto/cebate')
def project_cebate():
    return render_template('projects/cebate.html')

@app.route('/proyecto/fotomontajes')
def project_fotomontajes():
    return render_template('projects/fotomontajes.html')

@app.route('/proyecto/yogui')
def project_yogui():
    return render_template('projects/yogui.html')

# Podés agregar el resto de las rutas acá...

if __name__ == '__main__':
    app.run(debug=True)