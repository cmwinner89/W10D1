class DomNodeCollection {
    constructor(nodes) {
        this.nodes = nodes;
    }


    empty() {
       this.html('');
    }

    remove() {

    }

    attr() {


    }

    addClass() {


    }

    removeClass() {

    }

    html(str) {
        if (!str) { 
            return this.nodes[0].innerHTML;
        } else {
            this.nodes.forEach( node => {
                node.innerHTML = str;
            });
        }
    }

    find() {

    }

    children() {

    }

    parent() {

    }

}

module.exports = DomNodeCollection; 