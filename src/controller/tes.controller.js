const axios = require('axios');
const fs = require('fs');
const isEmpty = require('is-empty');

const GetAll = async (req, res) => {
    try {
        const { data, status } = await axios.get('https://www.ecuavisa.com/rss/portada.json');
        if(data){
            console.log(data.rss.channel);
            // guardar en db.json los datos ubicacion src/db/db.json
            const items = data.rss.channel.item;
            var nuevo_items = [];
            for (let index = 0; index < items.length; index++) {
                const i = items[index];
                const item = {
                    id: index+1,
                    title: i.title,
                    link: i.link,
                    guid: i.guid,
                    pubDate: i.pubDate,
                    description: i.description,
                    content: i['content:encoded'],
                    guid: i.guid,
                    categories: i.categories,
                }
                nuevo_items.push(item);
                
            }
            fs.writeFileSync('src/db/db.json', JSON.stringify(nuevo_items));
            res.status(status).json(nuevo_items);
        }else{
            console.log("no hay data");
            res.status(status).json({ message: 'No hay data' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const GetOne = async (req, res) => {
    try {
        const { id } = req.params;
        // buscar desde db.json el id
        const data = fs.readFileSync('src/db/db.json', { encoding: 'utf8' });
        const items = JSON.parse(data);
        const item = items.find(i => i.id == id);
        if(item){
            res.status(200).json(item);
        }else{
            res.status(404).json({ message: 'No existe el item' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const Create = async (req, res) => {
    try {
        const { title, link, guid, pubDate, description } = req.body;
        // buscar desde db.json el id
        // validar que dolo los campos requeridos esten llenos
        if(isEmpty(title) || isEmpty(link) || isEmpty(guid) || isEmpty(pubDate) || isEmpty(description)){
            return res.status(400).json({ message: 'Todos los campos son requeridos' });
        }


        const data = fs.readFileSync('src/db/db.json', { encoding: 'utf8' });
        const items = JSON.parse(data);
        const item = {
            id: items.length+1,
            title,
            link,
            guid,
            pubDate,
            description
        }
        items.push(item);
        fs.writeFileSync('src/db/db.json', JSON.stringify(items));
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const Update = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, link, guid, pubDate, description } = req.body;
        // validar que dolo los campos requeridos esten llenos
        if(isEmpty(title) || isEmpty(link) || isEmpty(guid) || isEmpty(pubDate) || isEmpty(description)){
            return res.status(400).json({ message: 'Todos los campos son requeridos para la actualizacion' });
        }
        // buscar desde db.json el id
        const data = fs.readFileSync('src/db/db.json', { encoding: 'utf8' });
        const items = JSON.parse(data);
        const index = items.findIndex(i => i.id == id);
        if(index != -1){
            const item = {
                id,
                title,
                link,
                guid,
                pubDate,
                description
            }
            items[index] = item;
            fs.writeFileSync('src/db/db.json', JSON.stringify(items));
            res.status(200).json(item);
        }else{
            res.status(404).json({ message: 'No existe el item' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const Delete = async (req, res) => {
    try {
        const { id } = req.params;
        // buscar desde db.json el id
        const data = fs.readFileSync('src/db/db.json', { encoding: 'utf8' });
        const items = JSON.parse(data);
        const index = items.findIndex(i => i.id == id);
        if(index != -1){
            items.splice(index, 1);
            fs.writeFileSync('src/db/db.json', JSON.stringify(items));
            res.status(200).json({ message: 'Item eliminado' });
        }else{
            res.status(404).json({ message: 'No existe el item' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    GetAll,
    GetOne,
    Create,
    Update,
    Delete,
}