//It will generate the metric based upon the data received
/* func metricGeneration(metric [][]string) {
         fmt.Println("Entered into metric generation ----------------------------------------")
        //Getting the hostname from the local machine
        name, err := os.Hostname()
        if err != nil {
                panic(err)
        }
        fmt.Println("name is",name)
        //Getting the prefix from the hostname, which is used for "pn"
        prefix := strings.Split(name, "-")
        fmt.Println("Prefix is", prefix)
        fmt.Println("Length is:",len(metric))
        for i :=0; i < len(metric); i++ {
                temp := strings.Split(metric[i][0], "/")
                temp1 := strings.Split(temp[1], "i")
                fmt.Println("Temp1 is:",temp1)
                //Getting the span
                var str string
                i1, err := strconv.Atoi(temp1[1])
                if err == nil {
                        str = fmt.Sprintf("%s%d", "G", i1+10)
                        fmt.Println("G convertion:", str)
                }

                //Prefixing the "pn" with local prefix code
                no := metric[i][7]
                fmt.Println("Number is:", no)
                var number string
                if len(no) == 10 {
                        number = fmt.Sprintf("%d%s", 0, no)
                } else if len(no) == 8 {
                        number = fmt.Sprintf("%s%s", prefix[0], no)
                } else {
                        number = no
                }

                //Generating the required metric data
                var m Metrics
                m.name = "call.channel_ringing_long"
                m.timestamp = time.Now().Format(time.RFC850)
                m.tags = Tags{
                        service: "monitoring.calls",
                        host:    name,
                        span:    str,
                        pn:      number,
                }
                m.fields = Field{
                        count:   "1",
                        channel: metric[i][0],
                }
                fmt.Println(m)
        }
 }*/
