const { log, chalk } = require('./helpers');
let _input = '4 2 1\n 1 2\n 2 4\n 2 3\n 10\n 20\n 20\n 30\n 1\n 2';

exports.computeColors = (n) => {
    if (n.colors != null) { return; }

    n.colors = {};
    for (let i = 0; i < n.nodes.length; i++) {
        this.computeColors(n.nodes[i]);
        for (let j in n.nodes[i].colors) {
            n.colors[j] = 1;
        }
    }
    n.colors[n.color] = 1;
}


exports.processData = () => {
    let parse_fun = (s) => parseInt(s, 10);
    let lines = _input.split('\n');
    let params = lines.shift().split(' ').map(parse_fun);
    let N = params[0];
    let M = params[1];
    let R = params[2];
    log(N)
    let nodes = [];
    for (let i = 0; i <= N; i++) {
        nodes[i] = { color: 0, nodes: [], colors: null};
    }
    let root = nodes[R];
    let edges = lines.splice(0, N - 1);
    log(edges);
    for (let i = 0; i < N - 1; i++) {
        log("Totrim")
        let edge = edges[i].trim().split(' ').map(parse_fun);
        log(edge);
            nodes[edge[0]].nodes.push(nodes[edge[1]]);
        
    }
    
    let colors = lines.splice(0, N);
    for (let i = 1; i <= N; i++) {
        let color = parse_fun(colors[i - 1]);
        nodes[i].color = color;
    }

    let queries = lines.splice(0, M);
    let res = [];
    for (let i = 1; i <= M; i++) {
        let query = parse_fun(queries[i - 1]);
        let node = nodes[query];
        this.computeColors(node);
        let cnt = 0;
        for (let j in node.colors) {
            cnt++;
        }
        res.push(cnt);
    }
    log(chalk.green('The response is!!'));
    log(chalk.blue(res.join('\n')));
}
