import { Connection } from '.';

export const all = async () => {
    return new Promise((resolve, reject) => {
        Connection.query ('SELECT * FROM leads.lead ORDER BY id DESC', (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

//can do a bunch of specific ones like inserts
//below is the default that grabs it all

export const update = async (id: string, stage: string) => {
    return new Promise((resolve, reject) => {
        Connection.query ("UPDATE `leads`.`lead` SET `stage_id` = '" + stage + "' WHERE (`id` = '" + id + "')", (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}

export const add = async(name: string, email: string, phone: string, event_date: string, guest_count: string, budget: string) => {
    return new Promise((resolve, reject ) => {
        Connection.query ("INSERT INTO `leads`.`lead` (`couple_name`, `email_address`, `phone_nbr`, `event_date`, `guest_count`, `budget`) VALUES ('" + name +"', '"+ email +"', '"+ phone +"', '"+ event_date +"', '"+ guest_count+"', '"+ budget +"');", (err, results) => {
            if(err) {
                return reject(err);
            }
            resolve(results);
        });
    });
}


export default {
    all, update, add
}

