import * as express from 'express';
import DB from './db';

const router = express.Router();

router.get('/api/stage', async (req, res) => {
    try {
        let stage = await DB.stage.all();
        res.json(stage);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/api/leads', async (req, res) => {
    try {
        let leads = await DB.leads.all();
        res.json(leads);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/api/update/id/:id/stage/:stage', async (req, res) => {
    try {
        console.log('happy');
        await DB.leads.update(req.params.id, req.params.stage);
        let leads = await DB.leads.all();
        res.json(leads);
        
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});


router.get('/api/add/name/:name/email/:email/phone/:phone/event_date/:event_date/guest_count/:guest_count/budget/:budget', async (req, res) => {
    try {
        console.log('REALLyhappy');
        await DB.leads.add(req.params.name, req.params.email, req.params.phone, req.params.event_date, req.params.guest_count, req.params.budget);
        let leads = await DB.leads.all();
        res.json(leads);
        
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});


export default router;