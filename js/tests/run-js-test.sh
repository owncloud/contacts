count=0
while [ $count -le 5 ]
do
	npm run test
	if [ $? -eq 0 ]
	then
		exit 0
	fi
	count=$((count+1))
done
exit 1
