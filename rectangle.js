//classe rectangle
class rectangle{
    constructor (width,height){
        this.width=width;
        this.height=height;
    }
    //utiliser getter et setter pour calculer la surface
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
    }

    //definir valeur a la largeur

    set width(value) {
        this._width = 20;
    }
}