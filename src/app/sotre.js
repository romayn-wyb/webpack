import Http from '@/unit/Http';
Http.post("/1001",{
    dataType: "json",
    data: JSON.stringify({ userId: "", token: "", param: { phone: 19922222222, password: 1 } }),
})