#!/bin/sh

while true; do
    docker compose exec db mysql -p123 -e "SHOW GLOBAL STATUS LIKE 'Prepared_stmt_count';" #| awk 'NR==2 {print $2}';
    sleep 1;
done
