from flask import Flask, render_template
import pyscreenshot

app = Flask(__name__)
i = 0

@app.route('/')
def get_screenshot():
    global i
    im = pyscreenshot.grab(bbox=(0,0,890,1200))
    if i <= 100:
        file_name = f'bingo-cards/bingo{i}.png'
        im.save(file_name)
        i+=1
        return render_template('bingo.html')
    else:
        exit()
        # return render_template('end.html')



if __name__ == '__main__':
    app.run(debug=True)