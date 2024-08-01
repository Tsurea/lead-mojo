package main

import (
	"fmt"
	"net/http"
)

func hello(w http.ResponseWriter, req *http.Request) {
	fmt.Fprintf(w, "Hello world\n")
}

func main() {
	http.HandleFunc("/hello", hello);
	fmt.Printf("Listening to port 5000...\n");
	http.ListenAndServe(":5000", nil);
}
