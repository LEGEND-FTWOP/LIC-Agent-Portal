package com.agentpro;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.*;

/**
 * ============================================================================
 * AgentPro - LIC Agent Management & Operations Platform (Backend Service)
 * Task ID: WD-LIC-001 | Student Submission Code: DAS-LIC-001
 * Organization: Data Alcott Systems - Free Web Development Internship
 * 
 * Standalone Single-File Spring Boot Architecture:
 * - REST APIs for Clients, Policies, and Commissions
 * - Official LIC Commission Engine (25% Yr 1, 15% Yr 2, 10% Yr 3-5, 5% Renewal)
 * - Section 194D Indian Income Tax TDS Deduction (5%)
 * ============================================================================
 */
@SpringBootApplication
@RestController
@CrossOrigin(origins = "*")
public class AgentProApplication {

    public static void main(String[] args) {
        SpringApplication.run(AgentProApplication.class, args);
        System.out.println("=================================================");
        System.out.println("  AgentPro LIC Platform Java Backend Running!   ");
        System.out.println("  Port: 8080 | Task ID: WD-LIC-001               ");
        System.out.println("=================================================");
    }

    @GetMapping("/")
    public Map<String, Object> rootStatus() {
        Map<String, Object> status = new HashMap<>();
        status.put("system", "AgentPro LIC Backend API");
        status.put("version", "1.0.0");
        status.put("status", "ONLINE");
        status.put("task", "WD-LIC-001");
        status.put("endpoints", Arrays.asList("/api/clients", "/api/policies", "/api/commissions/calculate"));
        return status;
    }
}

// ============================================================================
// DATA MODELS
// ============================================================================

/**
 * LIC Policyholder Client Entity
 */
class Client {
    private String id;
    private String name;
    private String email;
    private String phone;
    private String city;
    private String address;
    private String nominee;
    private String nomineeRelation;
    private String medicalHistory;
    private String annualIncome;

    public Client() {}

    public Client(String id, String name, String email, String phone, String city,
                  String address, String nominee, String nomineeRelation,
                  String medicalHistory, String annualIncome) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.city = city;
        this.address = address;
        this.nominee = nominee;
        this.nomineeRelation = nomineeRelation;
        this.medicalHistory = medicalHistory;
        this.annualIncome = annualIncome;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }
    public String getCity() { return city; }
    public void setCity(String city) { this.city = city; }
    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }
    public String getNominee() { return nominee; }
    public void setNominee(String nominee) { this.nominee = nominee; }
    public String getNomineeRelation() { return nomineeRelation; }
    public void setNomineeRelation(String nomineeRelation) { this.nomineeRelation = nomineeRelation; }
    public String getMedicalHistory() { return medicalHistory; }
    public void setMedicalHistory(String medicalHistory) { this.medicalHistory = medicalHistory; }
    public String getAnnualIncome() { return annualIncome; }
    public void setAnnualIncome(String annualIncome) { this.annualIncome = annualIncome; }
}

/**
 * LIC Policy Record Entity
 */
class Policy {
    private String id;
    private String policyNumber;
    private String clientId;
    private String clientName;
    private String policyType; // Endowment Plan, Health Insurance, Money Back, Child Plan, Pension Plan, Term Insurance
    private String planName;
    private double premiumAmount;
    private int termYears;
    private double sumAssured;
    private String paymentFrequency; // Yearly, Half-Yearly, Quarterly, Monthly
    private String startDate;
    private String nextDueDate;
    private String status; // Active, Pending, Matured, Lapsed, Renewal Due

    public Policy() {}

    public Policy(String id, String policyNumber, String clientId, String clientName,
                  String policyType, String planName, double premiumAmount, int termYears,
                  double sumAssured, String paymentFrequency, String startDate,
                  String nextDueDate, String status) {
        this.id = id;
        this.policyNumber = policyNumber;
        this.clientId = clientId;
        this.clientName = clientName;
        this.policyType = policyType;
        this.planName = planName;
        this.premiumAmount = premiumAmount;
        this.termYears = termYears;
        this.sumAssured = sumAssured;
        this.paymentFrequency = paymentFrequency;
        this.startDate = startDate;
        this.nextDueDate = nextDueDate;
        this.status = status;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getPolicyNumber() { return policyNumber; }
    public void setPolicyNumber(String policyNumber) { this.policyNumber = policyNumber; }
    public String getClientId() { return clientId; }
    public void setClientId(String clientId) { this.clientId = clientId; }
    public String getClientName() { return clientName; }
    public void setClientName(String clientName) { this.clientName = clientName; }
    public String getPolicyType() { return policyType; }
    public void setPolicyType(String policyType) { this.policyType = policyType; }
    public String getPlanName() { return planName; }
    public void setPlanName(String planName) { this.planName = planName; }
    public double getPremiumAmount() { return premiumAmount; }
    public void setPremiumAmount(double premiumAmount) { this.premiumAmount = premiumAmount; }
    public int getTermYears() { return termYears; }
    public void setTermYears(int termYears) { this.termYears = termYears; }
    public double getSumAssured() { return sumAssured; }
    public void setSumAssured(double sumAssured) { this.sumAssured = sumAssured; }
    public String getPaymentFrequency() { return paymentFrequency; }
    public void setPaymentFrequency(String paymentFrequency) { this.paymentFrequency = paymentFrequency; }
    public String getStartDate() { return startDate; }
    public void setStartDate(String startDate) { this.startDate = startDate; }
    public String getNextDueDate() { return nextDueDate; }
    public void setNextDueDate(String nextDueDate) { this.nextDueDate = nextDueDate; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}

/**
 * Commission Model with TDS Deduction under Section 194D
 */
class Commission {
    private String id;
    private String policyId;
    private String policyNumber;
    private String clientName;
    private int policyYear;
    private double premiumAmount;
    private double commissionPercentage;
    private double grossCommission;
    private double tdsDeduction;
    private double netPayout;
    private String paidDate;
    private String status;

    public Commission() {}

    public Commission(String id, String policyId, String policyNumber, String clientName,
                      int policyYear, double premiumAmount, double commissionPercentage,
                      double grossCommission, double tdsDeduction, double netPayout,
                      String paidDate, String status) {
        this.id = id;
        this.policyId = policyId;
        this.policyNumber = policyNumber;
        this.clientName = clientName;
        this.policyYear = policyYear;
        this.premiumAmount = premiumAmount;
        this.commissionPercentage = commissionPercentage;
        this.grossCommission = grossCommission;
        this.tdsDeduction = tdsDeduction;
        this.netPayout = netPayout;
        this.paidDate = paidDate;
        this.status = status;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getPolicyId() { return policyId; }
    public void setPolicyId(String policyId) { this.policyId = policyId; }
    public String getPolicyNumber() { return policyNumber; }
    public void setPolicyNumber(String policyNumber) { this.policyNumber = policyNumber; }
    public String getClientName() { return clientName; }
    public void setClientName(String clientName) { this.clientName = clientName; }
    public int getPolicyYear() { return policyYear; }
    public void setPolicyYear(int policyYear) { this.policyYear = policyYear; }
    public double getPremiumAmount() { return premiumAmount; }
    public void setPremiumAmount(double premiumAmount) { this.premiumAmount = premiumAmount; }
    public double getCommissionPercentage() { return commissionPercentage; }
    public void setCommissionPercentage(double commissionPercentage) { this.commissionPercentage = commissionPercentage; }
    public double getGrossCommission() { return grossCommission; }
    public void setGrossCommission(double grossCommission) { this.grossCommission = grossCommission; }
    public double getTdsDeduction() { return tdsDeduction; }
    public void setTdsDeduction(double tdsDeduction) { this.tdsDeduction = tdsDeduction; }
    public double getNetPayout() { return netPayout; }
    public void setNetPayout(double netPayout) { this.netPayout = netPayout; }
    public String getPaidDate() { return paidDate; }
    public void setPaidDate(String paidDate) { this.paidDate = paidDate; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}

// ============================================================================
// SERVICES & CALCULATIONS
// ============================================================================

/**
 * LIC Commission Calculation Service
 * Implements Standard LIC agent structure:
 * - Year 1: 25%
 * - Year 2: 15%
 * - Years 3-5: 10%
 * - Renewal (Year 6+): 5%
 * - TDS Deduction (Sec 194D): 5%
 */
@Service
class CommissionService {

    public double getRatePercentage(int year) {
        if (year == 1) return 25.0;
        if (year == 2) return 15.0;
        if (year >= 3 && year <= 5) return 10.0;
        return 5.0;
    }

    public Commission calculateCommission(String policyId, String policyNumber, String clientName,
                                          double premiumAmount, int policyYear) {
        double rate = getRatePercentage(policyYear);
        double grossCommission = Math.round(premiumAmount * (rate / 100.0));
        
        // 5% TDS under Indian Income Tax Act Section 194D
        double tds = Math.round(grossCommission * 0.05);
        double netPayout = grossCommission - tds;

        return new Commission(
            "COM-" + UUID.randomUUID().toString().substring(0, 8).toUpperCase(),
            policyId,
            policyNumber,
            clientName,
            policyYear,
            premiumAmount,
            rate,
            grossCommission,
            tds,
            netPayout,
            LocalDate.now().toString(),
            "Credited"
        );
    }
}

// ============================================================================
// REST CONTROLLERS
// ============================================================================

@RestController
@RequestMapping("/api/clients")
@CrossOrigin(origins = "*")
class ClientController {

    private final Map<String, Client> clientStore = new LinkedHashMap<>();

    public ClientController() {
        // Seed default clients for evaluation
        clientStore.put("CLI-101", new Client("CLI-101", "Rajesh S. Sundaram", "rajesh.sundaram@gmail.com",
                "+91 98402 11234", "Chennai", "T. Nagar, Chennai", "Lakshmi Sundaram", "Spouse", "Fit", "₹18,50,000"));
        clientStore.put("CLI-102", new Client("CLI-102", "Dr. Ananya Natarajan", "dr.ananya.n@apollohospitals.org",
                "+91 97890 44521", "Chennai", "Adyar, Chennai", "Karthik Natarajan", "Spouse", "Mild Hypertension", "₹24,00,000"));
        clientStore.put("CLI-103", new Client("CLI-103", "Vikram K. Singhania", "vikram.singhania@corpmail.in",
                "+91 99301 88762", "Mumbai", "Bandra West, Mumbai", "Pooja Singhania", "Spouse", "Fit", "₹32,00,000"));
    }

    @GetMapping
    public List<Client> getAllClients() {
        return new ArrayList<>(clientStore.values());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Client> getClientById(@PathVariable String id) {
        Client c = clientStore.get(id);
        return c != null ? ResponseEntity.ok(c) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<Client> createClient(@RequestBody Client client) {
        if (client.getId() == null || client.getId().isEmpty()) {
            client.setId("CLI-" + (100 + clientStore.size() + 1));
        }
        clientStore.put(client.getId(), client);
        return ResponseEntity.ok(client);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Client> updateClient(@PathVariable String id, @RequestBody Client client) {
        if (!clientStore.containsKey(id)) {
            return ResponseEntity.notFound().build();
        }
        client.setId(id);
        clientStore.put(id, client);
        return ResponseEntity.ok(client);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteClient(@PathVariable String id) {
        clientStore.remove(id);
        return ResponseEntity.noContent().build();
    }
}

@RestController
@RequestMapping("/api/policies")
@CrossOrigin(origins = "*")
class PolicyController {

    private final Map<String, Policy> policyStore = new LinkedHashMap<>();
    private final CommissionService commissionService;

    public PolicyController(CommissionService commissionService) {
        this.commissionService = commissionService;

        // Seed initial LIC policy
        policyStore.put("POL-801", new Policy("POL-801", "LIC-09823411", "CLI-101",
                "Rajesh S. Sundaram", "Endowment Plan", "LIC Jeevan Labh (Table 936)",
                54000, 21, 1200000, "Yearly", "2022-03-15", "2026-03-15", "Active"));
        policyStore.put("POL-802", new Policy("POL-802", "LIC-11029344", "CLI-102",
                "Dr. Ananya Natarajan", "Health Insurance", "LIC Arogya Rakshak (Table 906)",
                28500, 15, 750000, "Half-Yearly", "2023-08-10", "2026-02-10", "Active"));
    }

    @GetMapping
    public List<Policy> getAllPolicies() {
        return new ArrayList<>(policyStore.values());
    }

    @PostMapping
    public ResponseEntity<Policy> createPolicy(@RequestBody Policy policy) {
        if (policy.getId() == null || policy.getId().isEmpty()) {
            policy.setId("POL-" + (800 + policyStore.size() + 1));
        }
        policyStore.put(policy.getId(), policy);
        return ResponseEntity.ok(policy);
    }

    @GetMapping("/calculate-commission")
    public ResponseEntity<Commission> calculateCommission(
            @RequestParam double premium,
            @RequestParam int year,
            @RequestParam(defaultValue = "POL-801") String policyId,
            @RequestParam(defaultValue = "LIC-09823411") String policyNumber,
            @RequestParam(defaultValue = "Sample Client") String clientName) {
        Commission comm = commissionService.calculateCommission(policyId, policyNumber, clientName, premium, year);
        return ResponseEntity.ok(comm);
    }
}
