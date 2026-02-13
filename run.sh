cd frontend
yarn dev &
FRONT_PID=$!

cd backend
./gradlew bootRun &
BACK_PID=$!

trap "kill $FRONT_PID $BACK_PID" EXIT
wait