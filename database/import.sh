#!/bin/bash
FILES=$(ls /database/*.json | sort -n -t _ -k 2)

while : ; do
    CHECK=$(mongo --host ${MONGO_HOST} --username ${MONGO_USER} --password ${MONGO_PASS} --authenticationDatabase admin promotions --eval 'db.version() 2> /dev/null')
    if [[ $CHECK == *"MongoDB server version"* ]]
    then
        break
    fi
    echo "[$(date)] Checking connection to database... 😴"
    sleep 1
done

echo "[$(date)] Connected! 🤙"

for AFILE in ${FILES[@]}
do
    echo -e "[$(date)] Processing \t$AFILE"
    COLLECTION=`echo $AFILE | sed -n 's/.*\-\(.*\).json/\1/p'`
    mongoimport --host ${MONGO_HOST} --username ${MONGO_USER} --password ${MONGO_PASS} --authenticationDatabase admin --db promotions --collection ${COLLECTION} --mode upsert --file ${AFILE} --drop
    echo -e "[$(date)] Done \t\t$AFILE"
done

echo "[$(date)] No more files to process 🍻"

# mongo --host ${MONGO_HOST} --eval "db.getSiblingDB('promotions').createUser({user: '"${MONGO_USR}"', pwd: '"${MONGO_PSW}"', roles: ['readWrite']})"

